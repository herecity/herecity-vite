import { useEffect, useState } from 'react';
import { CityBoardType } from '../types/cityboard.types';

export function useCityboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [cityboardList, setCityboardList] = useState<CityBoardType[] | null>(
    null,
  );

  const fetchJSON = () => {
    fetch('/assets/data/nkeyboard/nkeyboard.json')
      .then((res) => res.json())
      .then((data) => {
        setCityboardList(data['cityboard']);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchJSON();
  }, []);

  return {
    isLoading,
    cityboardList,
  };
}
