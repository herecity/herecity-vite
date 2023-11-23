import {
  ArtistType,
  ConcertSongListType,
  SongType,
} from '../types/record.result.types';

export class PlaylistClient {
  fetchSongs = async (
    artist: Exclude<ArtistType, '방구석콘서트'>,
  ): Promise<SongType[]> => {
    return fetch(SongFile[artist])
      .then((res) => res.json())
      .then((data) => data['songList']);
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
