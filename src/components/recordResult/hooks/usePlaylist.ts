import { useEffect, useState } from 'react';
import { SongType, TagType } from '../types/record.result.types';
import { Playlist } from '../utils/playlist';
import { PlaylistClient } from '../api/playlistClient';

/**
 *
 * 태그에 맞는 플레이리스트 목록을 생성합니다
 *
 * @returns  playlist, isLoading
 */

export function usePlaylist(tagList: Set<TagType>) {
  const [isLoading, setIsLoading] = useState(true);
  const [playlist, setPlaylist] = useState<SongType[]>([]);

  const getSongList = async () => {
    const playlist = new Playlist(tagList, new PlaylistClient());
    setPlaylist(await playlist.create());
    setIsLoading(false);
  };

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
