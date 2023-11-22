import { useEffect, useState } from 'react';
import {
  ArtistType,
  ConcertSongListType,
  GroupType,
  SongType,
  TagType,
} from '../types/record.result.types';

/**
 *
 * 키워드에 맞는 플레이리스트 목록을 생성합니다
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
 *
 *
 *
 * @returns  getSongList
 */

export function usePlaylist(tagList: Set<TagType>) {
  let originalTag: Set<TagType>;
  let remainTags: Set<TagType>;
  let songs: SongType[] = []; // 태그 합집합 노래들
  let allTaggedSongs: SongType[] = []; // 태그 교집합 노래들

  const [isLoading, setIsLoading] = useState(true);
  const [playlist, setPlaylist] = useState<SongType[]>([]);

  const fetchSongs = async (artist: ArtistType): Promise<SongType[]> => {
    return await fetch(SongFile[artist])
      .then((res) => res.json())
      .then((data) => data['songList']);
  };

  const fetchConcertSongs = async (): Promise<ConcertSongListType> => {
    return await fetch(SongFile['방구석콘서트']).then((res) => res.json());
  };

  const loadTags = (tagList: Set<TagType>) => {
    originalTag = new Set(tagList.keys());
    remainTags = new Set(tagList.keys());
  };

  const removeTagItem = (item: TagType) => {
    remainTags.delete(item);
  };

  const isConcertInTag = () => {
    return remainTags.has('방구석콘서트');
  };

  const handleConcertTag = async () => {
    const concertSongs = await fetchConcertSongs();

    if (isGroupInTag()) {
      const taggedGroups = whichGroups();
      taggedGroups.forEach((group) => songs.push(...concertSongs[group]));
      allTaggedSongs = songs;
      return;
    }

    songs = [...concertSongs['NCT 127'], ...concertSongs['NCT DREAM']];
    removeTagItem('방구석콘서트');
    allTaggedSongs = songs;
  };

  const isGroupType = (tag: TagType): tag is GroupType => {
    return (
      tag === 'NCT 127' ||
      tag === 'NCT U' ||
      tag === 'NCT DREAM' ||
      tag === 'WayV'
    );
  };

  const isGroupInTag = () => {
    return Array.from(remainTags.keys()).some(isGroupType);
  };

  const whichGroups = () => {
    return Array.from(remainTags.keys()).filter(isGroupType);
  };

  const handleGroupTag = async () => {
    const taggedGroups = whichGroups();

    const list = await Promise.all(
      taggedGroups.map(async (group) => {
        removeTagItem(group);
        return await fetchSongs(group);
      }),
    ).then((list) => list.flat(1));

    songs.push(...list);
  };

  // 모든 파일 패치
  const fetchAllData = async () => {
    songs.push(...(await fetchSongs('NCT 127')));
    songs.push(...(await fetchSongs('NCT DREAM')));
    songs.push(...(await fetchSongs('NCT U')));
    songs.push(...(await fetchSongs('WayV')));
    songs.push(...(await fetchSongs('SOLO')));
  };

  // 콘서트, 그룹, 타이틀 제외 태그 (remainTags) 함수 처리
  const handleOtherTags = () => {
    let handledSongs: Map<string, SongType> = new Map();

    songs.forEach((song) => {
      remainTags.forEach((tag) => {
        if (song.tags.includes(tag)) {
          handledSongs.set(song.uid.bugs, song);
        }
      });
    });

    songs = Array.from(handledSongs.values());
  };

  const handleTags = async () => {
    if (isConcertInTag()) {
      await handleConcertTag();
      return;
    }
    if (isGroupInTag()) {
      await handleGroupTag();
    }

    if (songs.length === 0) {
      await fetchAllData();
    }
    if (remainTags.size === 0) {
      allTaggedSongs = songs;
      return;
    }
    handleOtherTags();
  };

  const updateTagCountPerSong = () => {
    songs.forEach((song) => {
      song.tagCnt = song['tags'].filter((tag) => originalTag.has(tag)).length;
    });
  };

  // sort by 태그 수 DESC, 발매일순 DESC
  const sortByTagAndRelease = () => {
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

    songs.sort(sortFunction);
    allTaggedSongs.sort(sortFunction);
  };

  const getSongList = async (tagList: Set<TagType>) => {
    loadTags(tagList);
    await handleTags();
    updateTagCountPerSong();
    sortByTagAndRelease();
    setIsLoading(false);
    setPlaylist(songs);
  };

  useEffect(() => {
    if (tagList.size === 0) return;

    getSongList(tagList);
  }, [tagList]);

  return {
    playlist,
    isLoading,
  };
}

export const SongFile: { [group in ArtistType]: string } = {
  'NCT 127': '/assets/data/songs/nct127.json',
  'NCT U': '/assets/data/songs/nctU.json',
  'NCT DREAM': '/assets/data/songs/nctDream.json',
  WayV: '/assets/data/songs/wayV.json',
  SOLO: '/assets/data/songs/solo.json',
  방구석콘서트: '/assets/data/songs/concert.json',
};
