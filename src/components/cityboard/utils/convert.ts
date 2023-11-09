import { CityBoardType } from '../types/cityboard.types';

export function getOnlyTextFromCityboard(
  cityboardList: readonly CityBoardType[] | null,
) {
  if (!cityboardList) return null;
  const tmpList: string[] = [];
  cityboardList.forEach((item) => {
    if (item.type === 'face') {
      item.texts.forEach((text) => tmpList.push(text));
      return;
    }
    if (item.group === 'Zeni') {
      item.texts.forEach((text) => tmpList.push(text));
      return;
    }

    tmpList.push(item.text);
  });

  return tmpList;
}
