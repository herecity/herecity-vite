export type CityBoardGroupType = 'NCT' | '127' | 'DREAM' | 'WAYV' | ZeniType;
export type ZeniType = 'Zeni';

export type CityBoardEmojiType = 'lyrics' | 'etc' | CityboardFaceEmojiType;
export type CityboardFaceEmojiType = 'face';

export type CityBoardBasicType = {
  group: Exclude<CityBoardGroupType, ZeniType>[];
  type: Exclude<CityBoardEmojiType, CityboardFaceEmojiType>;
  text: string;
};

export type CityBoardFaceType = {
  group: Exclude<CityBoardGroupType, ZeniType>;
  type: CityboardFaceEmojiType;
  member: string;
  texts: string[];
};

export type CityboardZeniType = {
  group: ZeniType;
  type: Exclude<CityBoardEmojiType, CityboardFaceEmojiType>;
  texts: string[];
};

export type CityBoardType =
  | CityBoardBasicType
  | CityBoardFaceType
  | CityboardZeniType;
