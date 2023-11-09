import { Fragment, useEffect, useState } from 'react';
// import SearchBar from './components/SearchBar';
import { useCityboard } from './hooks/useCityboard';
import {
  CityBoardEmojiType,
  CityBoardGroupType,
  CityBoardType,
} from './types/cityboard.types';
import Loading from '@components/common/Loading/Loading';
import Navbar from '@components/common/Navbar/Navbar';
import './styles/cityboard.styles.scss';

const CityboardMain = () => {
  const { isLoading, cityboardList } = useCityboard();
  const [selectedGroup, setSelectedGroup] = useState<
    CityBoardGroupType | 'all'
  >('all');
  const [selectedEmoji, setSelectedEmoji] = useState<
    CityBoardEmojiType | 'all'
  >('all');

  const handleTextClick = (text: string) => {
    window.navigator.clipboard.writeText(text).then(() => {
      alert(`복사 완료💚\n원하는 곳에 바로 사용해보세요!`);
    });
  };

  const filterGroup = (item: CityBoardType) => {
    if (selectedGroup === 'all') return true;
    return item.group === selectedGroup;
  };

  const filterEmojiType = (item: CityBoardType) => {
    if (selectedEmoji === 'all') return true;
    return item.type === selectedEmoji;
  };

  return (
    <div className='cityboard-main-root'>
      <Navbar />
      {/* <SearchBar /> */}
      <main>
        <section className='filter-section'>
          <select
            onChange={(e) =>
              setSelectedGroup(e.target.value as CityBoardGroupType | 'all')
            }>
            {groups.map((group) => (
              <option value={group.id} key={group.id}>
                {group.label}
              </option>
            ))}
          </select>
          <select
            onChange={(e) =>
              setSelectedEmoji(e.target.value as CityBoardEmojiType | 'all')
            }>
            {emojiTypes.map((group) => (
              <option key={group.id} value={group.id}>
                {group.label}
              </option>
            ))}
          </select>
        </section>
        <section className='text-section'>
          <ul>
            {isLoading && <Loading />}
            {cityboardList
              ?.filter(filterGroup)
              .filter(filterEmojiType)
              .map((item, idx) => {
                if (item.type === 'face') {
                  return (
                    <li key={idx} className='face-item-section'>
                      <div className='member-item'>{item.member}</div>
                      <ul>
                        {item.texts.map((text, idx) => (
                          <li className='text-item' key={idx}>
                            <div>{text}</div>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }

                if (item.group === 'Zeni') {
                  return (
                    <Fragment key={idx}>
                      {item.texts.map((text, idx) => (
                        <li key={idx} className='text-item'>
                          {text}
                        </li>
                      ))}
                    </Fragment>
                  );
                }

                return (
                  <li
                    className='text-item'
                    key={idx}
                    onClick={() => handleTextClick(item.text)}>
                    {item.text}
                  </li>
                );
              })}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default CityboardMain;

const groups: { label: string; id: 'all' | CityBoardGroupType }[] = [
  {
    label: '그룹 전체',
    id: 'all',
  },
  {
    label: 'NCT',
    id: 'NCT',
  },
  {
    label: 'NCT127',
    id: '127',
  },
  {
    label: 'NCT DERAM',
    id: 'DREAM',
  },
  {
    label: 'WayV',
    id: 'WAYV',
  },
  {
    label: 'For 시즈니',
    id: 'Zeni',
  },
];

const emojiTypes: { label: string; id: 'all' | CityBoardEmojiType }[] = [
  {
    label: '이모티콘 전체',
    id: 'all',
  },
  {
    label: '가사',
    id: 'lyrics',
  },
  {
    label: '표정',
    id: 'face',
  },
  {
    label: '기타',
    id: 'etc',
  },
];
