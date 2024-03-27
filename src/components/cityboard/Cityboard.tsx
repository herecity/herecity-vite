import { useState } from 'react';
import SearchBar from './components/SearchBar';
import { useCityboard } from './hooks/useCityboard';
import {
  CityBoardEmojiType,
  CityBoardGroupType,
  CityBoardType,
} from './types/cityboard.types';
import Loading from '@components/common/Loading/Loading';
import Navbar from '@components/common/Header/Header';
import './styles/cityboard.styles.scss';
import CityboardItem from './components/CityboardItem';

const Cityboard = () => {
  const { isLoading, cityboardList } = useCityboard();
  const [selectedGroup, setSelectedGroup] = useState<
    CityBoardGroupType | 'all'
  >('all');
  const [selectedEmoji, setSelectedEmoji] = useState<
    CityBoardEmojiType | 'all'
  >('all');

  const filterGroup = (item: CityBoardType) => {
    if (selectedGroup === 'all') return true;
    return item.group.includes(selectedGroup);
  };

  const filterEmojiType = (item: CityBoardType) => {
    if (selectedEmoji === 'all') return true;
    return item.type === selectedEmoji;
  };

  return (
    <div className='cityboard-main-root'>
      <Navbar />
      <main>
        <SearchBar cityboardList={cityboardList} />
        <section className='filter-section'>
          <div>
            <select
              onChange={(e) => {
                setSelectedGroup(e.target.value as CityBoardGroupType | 'all');
              }}>
              {groups.map((group) => (
                <option value={group.id} key={group.id}>
                  {group.label}
                </option>
              ))}
            </select>
            <select
              onChange={(e) => {
                setSelectedEmoji(e.target.value as CityBoardEmojiType | 'all');
              }}>
              {emojiTypes.map((group) => (
                <option key={group.id} value={group.id}>
                  {group.label}
                </option>
              ))}
            </select>
          </div>
        </section>
        <section className='text-section'>
          <ul>
            {isLoading && <Loading color='blue' />}
            {cityboardList
              ?.filter(filterGroup)
              .filter(filterEmojiType)
              .map((item, idx) => (
                <CityboardItem item={item} key={idx} />
              ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Cityboard;

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
    label: 'NCT DREAM',
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
