import { GroupType, SongType, TagType } from '../types/record.result.types';
import { PlaylistClient } from '../api/playlistClient';

/**
 *
 * 태그에 따른 플레이리스트 구성
 *
 * 1) 방구석콘서트 태그 있을 경우,
 *    - 콘서트 라이브 곡들만 포함됩니다.
 *    - 그룹 태그가 있을 경우, 콘서트 곡들 중에서 그룹 태그 교집합 곡들이 포함됩니다.
 *    - 나머지 태그는 무시됩니다
 * 2) 그룹 태그 있을 경우,
 *    - 해당 그룹 곡들과 나머지 태그의 교집합 곡들이 포합됩니다.
 * 3) 위 태그들 없으면, 모든 곡들 중 선택된 태그가 하나라도 포함된 곡들이 포함됩니다.
 *
 * => 합집합 태그 노래 (songs), 교집합 태그 노래 (allTaggedSongs)
 */

export class PlaylistMaker {
  private originalTag: Set<TagType> = new Set();
  private remainTags: Set<TagType> = new Set();
  songs: SongType[] = []; // 태그 합집합 노래들
  allTaggedSongs: SongType[] = []; // 태그 교집합 노래들
  playlistClient: PlaylistClient;

  constructor(tagList: Set<TagType>, playlistClient: PlaylistClient) {
    this.originalTag = new Set(tagList.keys());
    this.remainTags = new Set(tagList.keys());
    this.playlistClient = playlistClient;
  }

  private removeTagItem = (item: TagType) => {
    this.remainTags.delete(item);
  };

  private isConcertInTag = () => {
    return this.remainTags.has('방구석콘서트');
  };

  private handleConcertTag = async () => {
    const concertSongs = await this.playlistClient.fetchConcertSongs();

    if (this.isGroupInTag()) {
      const taggedGroups = this.whichGroups();
      taggedGroups.forEach((group) => this.songs.push(...concertSongs[group]));
      this.allTaggedSongs = this.songs;
      return;
    }

    this.songs = [...concertSongs['NCT 127'], ...concertSongs['NCT DREAM']];
    this.removeTagItem('방구석콘서트');
    this.allTaggedSongs = this.songs;
  };

  private isGroupType = (tag: TagType): tag is GroupType => {
    return (
      tag === 'NCT 127' ||
      tag === 'NCT U' ||
      tag === 'NCT DREAM' ||
      tag === 'WayV'
    );
  };

  private isGroupInTag = () => {
    return Array.from(this.remainTags.keys()).some(this.isGroupType);
  };

  private whichGroups = () => {
    return Array.from(this.remainTags.keys()).filter(this.isGroupType);
  };

  private handleGroupTag = async () => {
    const taggedGroups = this.whichGroups();

    const list = await Promise.all(
      taggedGroups.map(async (group) => {
        this.removeTagItem(group);
        return await this.playlistClient.fetchSongs(group);
      }),
    ).then((list) => list.flat(1));

    this.songs.push(...list);
  };

  // 콘서트, 그룹, 타이틀 제외 태그 (this.remainTags) 함수 처리
  private handleOtherTags = async () => {
    if (this.songs.length === 0) {
      this.songs = await this.playlistClient.fetchAllData();
    }

    let handledSongs: Map<string, SongType> = new Map();

    this.songs.forEach((song) => {
      this.remainTags.forEach((tag) => {
        if (song.tags.includes(tag)) {
          handledSongs.set(song.uid.bugs, song);
        }
      });
    });

    this.songs = Array.from(handledSongs.values());
  };

  private handleTags = async () => {
    if (this.isConcertInTag()) {
      await this.handleConcertTag();
      return;
    }
    if (this.isGroupInTag()) {
      await this.handleGroupTag();
    }

    if (this.remainTags.size === 0) {
      this.allTaggedSongs = this.songs;
      return;
    }

    await this.handleOtherTags();
  };

  private updateTagCountPerSong = () => {
    this.songs.forEach((song) => {
      song.tagCnt = song['tags'].filter((tag) =>
        this.originalTag.has(tag),
      ).length;
    });
  };

  // sort by 태그 수 DESC, 발매일순 DESC
  private sortByTagAndRelease = () => {
    const sortFunction = (a: SongType, b: SongType) => {
      const a_uid = parseInt(a.uid['melon']);
      const b_uid = parseInt(b.uid['melon']);
      const a_tagCnt = a.tagCnt ?? 0;
      const b_tagCnt = b.tagCnt ?? 0;
      if (a_tagCnt < b_tagCnt) return 1;
      if (a_tagCnt > b_tagCnt) return -1;
      if (a_uid < b_uid) return 1;
      if (a_uid > b_uid) return -1;
      return 0;
    };

    this.songs.sort(sortFunction);
    this.allTaggedSongs.sort(sortFunction);
  };

  create = async () => {
    await this.handleTags();
    this.updateTagCountPerSong();
    this.sortByTagAndRelease();
    return this.songs;
  };
}
