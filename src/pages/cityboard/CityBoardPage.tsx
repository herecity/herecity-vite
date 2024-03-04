import Cityboard from '@components/cityboard/Cityboard';
import { Helmet } from 'react-helmet';

const CityBoardPage = () => {
  return (
    <>
      <Helmet>
        <title>히어시티 | 시티보드</title>
        <meta property='og:site_name' content='히어시티' />
        <meta
          property='og:title'
          content='엔시티 텍대 모음 #히어시티 #시티보드'
        />
        <meta name='description' content='엔시티 텍대 맛집! #히어시티' />
        <meta property='og:image' content='/assets/images/main_thumbnail.png' />
        <meta property='og:url' content='https://here-city.com/city-board' />
      </Helmet>
      <Cityboard />;
    </>
  );
};

export default CityBoardPage;
