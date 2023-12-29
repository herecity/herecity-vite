import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.styles.scss';
import { images } from '@assets/images';

export const tabList = [
  {
    tab: 'record',
    name: '레코드샵',
    description: '엔시티 노래들로\n완성하는 플레이리스트',
  },
  {
    tab: 'city-board',
    name: '시티보드',
    description: '엔시티 텍대를\n모두 모아모아',
  },
  {
    tab: 'nchelin',
    name: '엔슐랭 가이드',
    description: '시즈니가 시즈니에게\n추천하는 진짜 맛집 찾기',
  },
  {
    tab: 'nbti',
    name: 'NBTI 테스트',
    description: '시즈니들만을 위한\nMBTI 테스트',
  },
];

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`navbar-root ${isOpen ? 'open' : ''}`}>
      <div className='navbar-container'>
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
        <ul className={`tab-list-container`}>
          {tabList.map((tab) => {
            return (
              <Link className='tab' key={tab.tab} to={`/${tab.tab}`}>
                <li>{tab.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
});

export default Navbar;
