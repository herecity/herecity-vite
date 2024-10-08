import Navbar from '@/components/common/Header/Header';
import { useState } from 'react';
import './styles/record.styles.scss';
import { useNavigate } from 'react-router-dom';
import { TagType } from '@/components/recordResult/types/record.result.types';

const Record = () => {
  const navigate = useNavigate();
  const [activeTags, setActiveTags] = useState(new Set());

  const handleKeywordClick = (keyword: string) => {
    setActiveTags((prev) => {
      const clone = new Set(prev);
      if (clone.has(keyword)) {
        clone.delete(keyword);
        return clone;
      }

      if (clone.size === 3) return clone;

      clone.add(keyword);
      return clone;
    });
  };

  const handleCreateBtnClick = () => {
    navigate(`result?tags=${Array.from(activeTags).join(',')}`);
  };

  return (
    <div className='record-root'>
      <Navbar />
      <main>
        {musicTags.map((section) => {
          return (
            <div className='section-container' key={section.name}>
              <div className='title'>{section.name}</div>
              <ul className='tags-container'>
                {section.items.map((item) => {
                  return (
                    <li
                      id={item}
                      className={`button-primary ${
                        activeTags.size === 3 ? 'disabled' : ''
                      } ${activeTags.has(item) ? 'active' : ''} tag`}
                      aria-disabled={activeTags.size === 3 ? true : false}
                      onClick={() => handleKeywordClick(item)}
                      key={item}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </main>
      <div className='create-btn-container'>
        <button
          onClick={handleCreateBtnClick}
          className={`button-primary ${activeTags.size > 0 ? 'active' : ''}`}>
          {'🎵 플리 만들기'}
        </button>
      </div>
    </div>
  );
};

export default Record;

export const musicTags: { name: string; items: TagType[] }[] = [
  {
    name: '계절/날씨/상황',
    items: [
      '봄노래',
      '여름노래',
      '가을노래',
      '겨울노래',
      '굿모닝',
      '나른한오후',
      '잠들기전',
      '새벽감성',
      '햇살가득',
      '비가주룩',
      '눈이펑펑',
      '공부할때',
      '산책할때',
      '운동할때',
      '여행갈때',
      '출근길에',
      '드라이브',
      '집으로가는길',
      '월요병퇴치',
      '신나는불금',
      '밤샘노동요',
      '방구석콘서트',
      '설렘가득LOVE',
      '이별후유증',
      '행운을부르는',
    ],
  },
  {
    name: '감정/기분',
    items: [
      '기분전환',
      '나만알기아까운',
      '내적댄스',
      '스트레스아웃',
      '울고싶은날',
      '자신감뿜뿜',
      '전투력상승',
      '힐링이필요해',
      '해피바이러스',
    ],
  },
  {
    name: '뮤직스타일',
    items: [
      '상큼청량',
      '마라네오',
      '치명섹시',
      '달콤달콤',
      '몽환적인',
      '비트맛집',
      '편안잔잔',
      '이지리스닝',
      '수능금지곡',
    ],
  },
  {
    name: '유닛/기타',
    items: [
      'NCT 127',
      'NCT DREAM',
      'WayV',
      'NCT U',
      'NCT 2021',
      'OST',
      'SM STATION',
      'SPECIAL',
    ],
  },
];
