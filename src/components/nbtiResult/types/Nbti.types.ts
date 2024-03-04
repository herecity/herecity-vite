export type NbtiType =
  | 'isfp'
  | 'entp'
  | 'esfj'
  | 'isfj'
  | 'infj'
  | 'esfp'
  | 'enfj'
  | 'entj'
  | 'enfp'
  | 'intj'
  | 'intp'
  | 'istj'
  | 'istp'
  | 'estp'
  | 'estj'
  | 'infp'
  | 'yet';

export type NctMember =
  | '태일'
  | '제노'
  | '쇼타로'
  | '쟈니'
  | '헨드리'
  | '쿤'
  | '도영'
  | '재민'
  | '텐'
  | '윈윈'
  | '정우'
  | '마크'
  | '지성'
  | '재현'
  | '샤오쥔'
  | '해찬'
  | '양양'
  | '성찬'
  | '천러'
  | '태용'
  | '유타'
  | '런쥔';

export type NbtiMembers = Record<NbtiType, readonly NctMember[]>;

export type NbtiMemberItem = Record<
  NctMember,
  { label: string; images: string }
>;

export type NbtiResultFormItem = {
  type: string;
  sameMembers: readonly NctMember[];
  goodMembers: readonly NctMember[];
  description: readonly string[];
};

export const NBTI: NbtiType[] = [
  'isfp',
  'entp',
  'esfj',
  'isfj',
  'infj',
  'esfp',
  'enfj',
  'entj',
  'enfp',
  'intj',
  'intp',
  'istj',
  'istp',
  'estp',
  'estj',
  'infp',
];
