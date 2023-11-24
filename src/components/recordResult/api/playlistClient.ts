import { client, testClient } from '@api/api';
import {
  ArtistType,
  ConcertSongListType,
  SongType,
} from '../types/record.result.types';
import { AxiosInstance } from 'axios';

export class PlaylistClient {
  client: AxiosInstance;

  constructor(isTest: boolean = false) {
    this.client = isTest ? testClient : client;
  }

  fetchSongs = async (
    artist: Exclude<ArtistType, '방구석콘서트'>,
  ): Promise<SongType[]> => {
    return await this.client
      .get(SongFile[artist])
      .then((data) => data.data['songList']);
  };

  fetchConcertSongs = async (): Promise<ConcertSongListType> => {
    return this.client.get(SongFile['방구석콘서트']).then((data) => data.data);
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
      songFilesExceptConcert.map(
        async (artist) => await this.fetchSongs(artist),
      ),
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
