import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import '@styles/home/home.styles.css';

const Home = () => {
  const tabList = [
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

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={`home-root ${tabList[activeTab].tab}`}>
      <nav className='navbar-container'>
        <Link to={'/'}>
          <span className='logo'>{'HERECITY'}</span>
        </Link>
        <ul className='tab-list-container'>
          {tabList.map((tab) => {
            return (
              <Link to={tab.tab}>
                <li>{tab.name}</li>
              </Link>
            );
          })}
        </ul>
      </nav>
      <main className='main-container'>
        <Swiper
          slidesPerView={1}
          pagination={{ type: 'bullets' }}
          modules={[Pagination]}
          onSlideChange={({ activeIndex }) => setActiveTab(activeIndex)}>
          {tabList.map((tab) => {
            return (
              <SwiperSlide>
                <Link to={tab.tab}>
                  <div className='slide-container'>
                    <div className='tab-name'>{tab.name}</div>
                    <p>{tab.description}</p>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </main>
    </div>
  );
};

export default Home;
