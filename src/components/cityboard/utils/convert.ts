import { CityBoardType } from '../types/cityboard.types';

export function getOnlyTextFromCityboard(
  cityboardList: readonly CityBoardType[] | null,
) {
  if (!cityboardList) return null;
  const tmpList: string[] = [];
  cityboardList.forEach((item) => {
    if (item.type === 'face') {
      item.text.forEach((text) => tmpList.push(text));
      return;
    }
    item.text.forEach((text) => tmpList.push(text));
  });

  return tmpList;
}
