import Navbar from '@/components/common/Header/Header';
import './styles/nchelin.styles.scss';
import { useState } from 'react';
import { images } from '@/assets/images';

const Nchelin = () => {
  const [activeTags, setActiveTags] = useState(new Set(tags));
  const [search, setSearch] = useState('');
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleSearchClick = async () => {
    window.open(
      `https://twitter.com/search?q=(${search} AND ${Array.from(activeTags)
        .map((t) => `%23${t}`)
        .join(' OR ')})`,
    );
  };

  const handleAllTAgClick = () => {
    activeTags.size === tags.length
      ? setActiveTags(new Set())
      : setActiveTags(new Set(tags));
  };

  const handleTagClick = (tag: Tag) => {
    setActiveTags((prev) => {
      const clone = new Set(prev);
      clone.has(tag) ? clone.delete(tag) : clone.add(tag);
      return clone;
    });
  };

  return (
    <div className={`nchelin-root`}>
      <Navbar />
      <main className='main-container'>
        <h1 className='headline'>{'원하는 맛시태그로 검색하기'}</h1>
        <div className='search-bar-container'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearchClick();
            }}>
            <div className='input-container'>
              <input
                className='input'
                placeholder='검색할 지역을 입력해주세요'
                onChange={(e) => setSearch(e.target.value)}
                type='text'
                value={search}
              />
              {search.length > 0 && (
                <button
                  type='button'
                  onClick={() => setSearch('')}
                  className='delete-btn'>
                  <img alt='삭제 버튼' src={images.delete} />
                </button>
              )}
              <button
                type='submit'
                onClick={handleSearchClick}
                className='search-btn'>
                <img src={images.search} alt='검색 버튼' />
              </button>
            </div>
          </form>
          <button
            className='tag-option-btn'
            onClick={() => setIsSelectOpen((prev) => !prev)}>
            <span>{'맛시태그 옵션 더보기'}</span>
            <img
              className={`arrow ${isSelectOpen ? 'open' : ''}`}
              src={images.triangle}
              alt='화살표'
            />
          </button>
        </div>
        <div className={`tags-more-container ${isSelectOpen ? 'open' : ''}`}>
          <div className={`tags-container`}>
            <div className='tag' onClick={handleAllTAgClick}>
              <img
                src={
                  activeTags.size === tags.length
                    ? images.check.active
                    : images.check.inactive
                }
                alt='전체 선택 체크박스'
              />
              <span>{'전체 선택'}</span>
            </div>
            <ul className='tags-list'>
              {tags.map((tag) => {
                return (
                  <li
                    className='tag'
                    onClick={() => handleTagClick(tag)}
                    key={tag}>
                    <img
                      src={
                        activeTags.has(tag)
                          ? images.check.active
                          : images.check.inactive
                      }
                      alt='체크박스 이미지'
                    />
                    <span>{tag}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Nchelin;

type Tag = (typeof tags)[number];

const tags = [
  '먹태일_기릿',
  '태일아_먹어봐',
  'JMTforTAEIL',
  '맛있었쟈니',
  '먹어봤쟈니',
  '태용아_먹어보태용',
  '유타_味확인맛집',
  '먹어봤도영',
  '재혀니_맛있게머겅',
  '먹으면_서로_윈윈',
  '정우의_원데이씩스밀',
  '마크한테만공개',
  '런쥔이_밥무거써',
  '런쥔이의_맛집내비게이션',
  '제노의_맛그당어',
  '먹다가_해찬이_생각이_나신거예요',
  '재민아_밥먹어',
  '나나의_맛집탐방기',
  '나나챌린지',
  '천러야_이거_먹기좋아',
  '튼튼하게_먹지성',
  '박지성_단1g도안줌',
  '성찬이의_진수성찬',
  '먹어봤_쇼타로',
] as const;
