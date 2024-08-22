import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/header.styles.scss';
import { images } from '@/assets/images';

export const HEADER_LIST = [
  {
    tab: '/record',
    name: '레코드샵',
    description: '엔시티 노래들로\n완성하는 플레이리스트',
  },
  {
    tab: '/city-board',
    name: '시티보드',
    description: '엔시티 텍대를\n모두 모아모아',
  },
  {
    tab: '/nchelin',
    name: '엔슐랭 가이드',
    description: '시즈니가 시즈니에게\n추천하는 진짜 맛집 찾기',
  },
  {
    tab: '/nbti',
    name: 'NBTI 테스트',
    description: '시즈니들만을 위한\nMBTI 테스트',
  },
  {
    tab: 'https://docs.google.com/forms/d/e/1FAIpQLScHUKmfm5eYor3lbVArgNSGT6wPCPQ9cpXX6zBFbOAh36lhpA/viewform',
    name: 'Contact Us',
    description: '의견 제출',
  },
];

const Header = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`header-root ${isOpen ? 'open' : ''}`}>
      <div className='header-container'>
        <div className='logo-container'>
          <Link to={'/'}>
            <span className='logo'>{'HERECITY'}</span>
          </Link>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className='mobile-toggle-btn'>
            <img src={images.hamburger} alt='토글 버튼' />
          </button>
        </div>
        <nav className='navbar'>
          <ul className={`tab-list-container`}>
            {HEADER_LIST.map((tab) => {
              return (
                <Link className='tab' key={tab.tab} to={tab.tab}>
                  <li>{tab.name}</li>
                </Link>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
});

export default Header;
