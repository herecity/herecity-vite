import { useCallback, useEffect, useState } from 'react';
import { SongType, TagType } from '../types/record.result.types';
import { PlaylistClient } from '../api/playlistClient';
import { PlaylistMaker } from '../libs/playlistMaker';

/**
 *
 * 태그에 맞는 플레이리스트 목록을 생성합니다
 *
 * @returns  playlist, isLoading
 */

export function usePlaylist(tagList: Set<TagType>) {
  const [isLoading, setIsLoading] = useState(true);
  const [playlist, setPlaylist] = useState<SongType[]>([]);

  const getSongList = useCallback(async () => {
    setIsLoading(true);
    const playlistMaker = new PlaylistMaker(tagList, new PlaylistClient());
    setPlaylist(await playlistMaker.create());
    setIsLoading(false);
  }, [tagList]);

  useEffect(() => {
    if (tagList.size === 0) {
      setIsLoading(false);
      return;
    }

    getSongList();
  }, [tagList]);

  return {
    playlist,
    isLoading,
  };
}
