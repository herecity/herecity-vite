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

export type DeviceType = 'ANDROID' | 'IPHONE' | 'WINDOWS' | 'MAC';
export type OperatorType = ',' | ';' | '|';

export type MusicPlatformOperatorType = {
  [platform in MusicPlatfomTypes]: { [key in DeviceType]: ',' | ';' | '|' };
};
export type DeepLinkType = Record<
  MusicPlatfomTypes,
  Record<DeviceType, string>
>;
export type StoreLinkType = DeepLinkType;
