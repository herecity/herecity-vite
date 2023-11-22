import { SongFile } from '../hooks/usePlaylist';
import {
  ArtistType,
  ConcertSongListType,
  GroupType,
  SongType,
  TagType,
} from '../types/record.result.types';

export class PlaylistClient {
  private originalTag: Set<TagType> = new Set();
  private remainTags: Set<TagType> = new Set();
  songs: SongType[] = []; // 태그 합집합 노래들
  allTaggedSongs: SongType[] = []; // 태그 교집합 노래들

  constructor(tagList: Set<TagType>) {
    this.originalTag = new Set(tagList.keys());
    this.remainTags = new Set(tagList.keys());
  }

  private fetchSongs = async (artist: ArtistType): Promise<SongType[]> => {
    return await fetch(SongFile[artist])
      .then((res) => res.json())
      .then((data) => data['songList']);
  };

  private fetchConcertSongs = async (): Promise<ConcertSongListType> => {
    return await fetch(SongFile['방구석콘서트']).then((res) => res.json());
  };

  private removeTagItem = (item: TagType) => {
    this.remainTags.delete(item);
  };

  private isConcertInTag = () => {
    return this.remainTags.has('방구석콘서트');
  };

  private handleConcertTag = async () => {
    const concertSongs = await this.fetchConcertSongs();

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
        return await this.fetchSongs(group);
      }),
    ).then((list) => list.flat(1));

    this.songs.push(...list);
  };

  // 모든 파일 패치
  private fetchAllData = async () => {
    this.songs.push(...(await this.fetchSongs('NCT 127')));
    this.songs.push(...(await this.fetchSongs('NCT DREAM')));
    this.songs.push(...(await this.fetchSongs('NCT U')));
    this.songs.push(...(await this.fetchSongs('WayV')));
    this.songs.push(...(await this.fetchSongs('SOLO')));
  };

  // 콘서트, 그룹, 타이틀 제외 태그 (this.remainTags) 함수 처리
  private handleOtherTags = () => {
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

    if (this.songs.length === 0) {
      await this.fetchAllData();
    }
    if (this.remainTags.size === 0) {
      this.allTaggedSongs = this.songs;
      return;
    }
    this.handleOtherTags();
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

  createPlaylist = async () => {
    await this.handleTags();
    this.updateTagCountPerSong();
    this.sortByTagAndRelease();
    return this.songs;
  };
}
