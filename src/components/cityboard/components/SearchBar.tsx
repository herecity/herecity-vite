import { useEffect, useState } from 'react';
import { CityBoardType } from '../types/cityboard.types';
import { getOnlyTextFromCityboard } from '../utils/convert';
import '../styles/search.bar.styles.scss';

type Props = {
  cityboardList: CityBoardType[] | null;
};

const SearchBar = ({ cityboardList }: Props) => {
  const [search, setSearch] = useState('');
  const [textList, setTextList] = useState<string[] | null>(null);
  const [filteredList, setFilteredList] = useState<string[] | null>(null);

  const handleTextClick = (text: string) => {
    window.navigator.clipboard.writeText(text).then(() => {
      alert(`복사 완료💚\n원하는 곳에 바로 사용해보세요!`);
    });
  };

  const findMatches = () => {
    if (!textList) return;
    if (search === '') {
      setFilteredList(null);
      return;
    }

    const regex = new RegExp(search, 'gi');
    const tmpList = textList.filter((item) => item.match(regex));
    setFilteredList(tmpList.length > 0 ? tmpList : null);
  };

  useEffect(() => {
    setTextList(getOnlyTextFromCityboard(cityboardList));
  }, [cityboardList]);

  useEffect(() => {
    findMatches();
  }, [search]);

  return (
    <section className='cityboard-search-bar-root'>
      <div className='search-bar-container'>
        <div className='input-container'>
          <input
            className='input'
            placeholder='검색으로 찾기'
            onChange={(e) => setSearch(e.target.value)}
            type='text'
            value={search}
          />
          {search.length > 0 && (
            <div onClick={() => setSearch('')} className='delete-btn'>
              {'X'}
            </div>
          )}
        </div>
        {filteredList && (
          <div className='list-container'>
            {filteredList.map((text) => {
              return (
                <li onClick={() => handleTextClick(text)} className='item'>
                  {text}
                </li>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchBar;
