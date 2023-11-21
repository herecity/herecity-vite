import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './styles/home.styles.scss';
import Navbar, { tabList } from '@components/common/Navbar/Navbar';

const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={`home-root ${tabList[activeTab].tab}`}>
      <Navbar />
      <main className='main-container'>
        <Swiper
          slidesPerView={1}
          pagination={{ type: 'bullets' }}
          modules={[Pagination]}
          onSlideChange={({ activeIndex }) => setActiveTab(activeIndex)}>
          {tabList.map((tab) => {
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
