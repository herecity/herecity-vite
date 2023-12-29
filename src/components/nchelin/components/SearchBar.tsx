import { useEffect, useState } from 'react';
import '../styles/search.bar.styles.scss';

const tags = [
  '%23먹태일_기릿',
  '%23태일아_먹어봐',
  '%23JMTforTAEIL',
  '%23맛있었쟈니',
  '%23먹어봤쟈니',
  '%23태용아_먹어보태용',
  '%23유타_味확인맛집',
  '%23먹어봤도영',
  '%23재혀니_맛있게머겅',
  '%23먹으면_서로_윈윈',
  '%23정우의_원데이씩스밀',
  '%23마크한테만공개',
  '%23런쥔이_밥무거써',
  '%23런쥔이의_맛집내비게이션',
  '%23제노의_맛그당어',
  '%23먹다가_해찬이_생각이_나신거예요',
  '%23재민아_밥먹어',
  '%23나나의_맛집탐방기',
  '%23나나챌린지',
  '%23천러야_이거_먹기좋아',
  '%23튼튼하게_먹지성',
  '%23박지성_단1g도안줌',
  '%23성찬이의_진수성찬',
  '%23먹어봤_쇼타로',
];

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [textList, setTextList] = useState<string[] | null>(null);
  const [filteredList, setFilteredList] = useState<string[] | null>(null);

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
              return <li className='item'>{text}</li>;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchBar;
