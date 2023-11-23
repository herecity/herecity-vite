import { PlaylistClient } from '@components/recordResult/api/playlistClient';
import {
  ArtistType,
  ConcertSongListType,
  SongType,
} from '@components/recordResult/types/record.result.types';
import { recordResultNCT127Data } from '@mocks/api/data/recordResultData';

export class StubPlaylistClient extends PlaylistClient {
  fetchSongs = async (): Promise<SongType[]> => {
    return new Promise((res) => res(recordResultNCT127Data['songList']));
  };

  fetchConcertSongs = async (): Promise<ConcertSongListType> => {
    return fetch(SongFile['방구석콘서트']).then((res) => res.json());
  };

  // 모든 파일 패치 (방구석 콘서트 제외)
  fetchAllData = async () => {
    const songFilesExceptConcert: Exclude<ArtistType, '방구석콘서트'>[] = [
      'NCT 127',
      'NCT U',
      'NCT DREAM',
      'WayV',
      'SOLO',
    ];

    return Promise.all(
      songFilesExceptConcert.map(async () => await this.fetchSongs()),
    ).then((list) => list.flat(1));
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
