export type CityBoardGroupType = 'NCT' | '127' | 'DREAM' | 'WAYV' | 'Zeni';

export type CityBoardEmojiType = 'lyrics' | 'etc' | CityboardFaceEmojiType;
export type CityboardFaceEmojiType = 'face';

export type CityBoardBasicType = {
  group: CityBoardGroupType[];
  type: Exclude<CityBoardEmojiType, CityboardFaceEmojiType>;
  text: string[];
};

export type CityBoardFaceType = Pick<CityBoardBasicType, 'group' | 'text'> & {
  type: CityboardFaceEmojiType;
  member: string;
};

export type CityBoardType = CityBoardBasicType | CityBoardFaceType;
