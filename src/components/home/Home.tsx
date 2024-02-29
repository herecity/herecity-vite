import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './styles/home.styles.scss';
import Header from '@components/common/Header/Header';

export const TAB_LIST = [
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

const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={`home-root ${TAB_LIST[activeTab].tab}`}>
      <Header />
      <main className='main-container'>
        <Swiper
          slidesPerView={1}
          pagination={{ type: 'bullets' }}
          modules={[Pagination]}
          onSlideChange={({ activeIndex }) => setActiveTab(activeIndex)}>
          {TAB_LIST.map((tab) => {
            return (
              <SwiperSlide>
                <div className='slide-container'>
                  <div className='tab-name'>{tab.name}</div>
                  <p>{tab.description}</p>
                  <button
                    onClick={() => navigate(tab.tab)}
                    className={`button-primary ${tab.tab}`}>
                    {'바로가기'}
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </main>
    </div>
  );
};

export default Home;
