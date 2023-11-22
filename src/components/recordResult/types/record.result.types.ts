export type MusicPlatfomTypes = 'bugs' | 'genie' | 'melon';

export type SongType = {
  title: string;
  artist: string;
  album: string;
  image: string;
  uid: Record<MusicPlatfomTypes, string>;
  tags: TagType[];
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

export type TagType =
  | '봄노래'
  | '여름노래'
  | '가을노래'
  | '겨울노래'
  | '굿모닝'
  | '나른한오후'
  | '잠들기전'
  | '새벽감성'
  | '햇살가득'
  | '비가주룩'
  | '눈이펑펑'
  | '공부할때'
  | '산책할때'
  | '운동할때'
  | '여행갈때'
  | '출근길에'
  | '드라이브'
  | '집으로가는길'
  | '월요병퇴치'
  | '신나는불금'
  | '밤샘노동요'
  | '설렘가득LOVE'
  | '이별후유증'
  | '행운을부르는'
  | '기분전환'
  | '나만알기아까운'
  | '내적댄스'
  | '스트레스아웃'
  | '울고싶은날'
  | '자신감뿜뿜'
  | '전투력상승'
  | '힐링이필요해'
  | '해피바이러스'
  | '상큼청량'
  | '마라네오'
  | '치명섹시'
  | '달콤달콤'
  | '몽환적인'
  | '비트맛집'
  | '편안잔잔'
  | '이지리스닝'
  | '수능금지곡'
  | 'NCT 2021'
  | 'OST'
  | 'SM STATION'
  | 'SPECIAL'
  | ArtistType
  | OnlyTitle;

export type OnlyTitle = 'ONLYTITLE';

export type GroupType = 'NCT 127' | 'NCT U' | 'NCT DREAM' | 'WayV';

export type ArtistType = GroupType | 'SOLO' | '방구석콘서트';

export type ConcertSongListType = { [group in GroupType]: SongType[] };
