export type MusicPlatfomTypes = 'bugs' | 'genie' | 'melon';

export type SongType = {
  title: string;
  artist: string;
  album: string;
  image: string;
  uid: Record<MusicPlatfomTypes, string>;
  tags: string[];
  URL_mv?: string;
  URL_dance?: string;
  tagCnt?: number;
};
