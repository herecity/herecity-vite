import NbtiResult from '@/components/nbtiResult/NbtiResult';
import { Helmet } from 'react-helmet';

const NbtiResultPage = () => {
  return (
    <>
      <Helmet>
        <title>히어시티 | NBTI</title>
        <meta property='og:site_name' content='히어시티' />
        <meta
          property='og:title'
          content='시즈니만의 MBTI 테스트 #히어시티 #NBTI'
        />
        <meta name='description' content='시즈니만의 MBTI 테스트! #히어시티' />
        <meta property='og:image' content='/assets/images/main_thumbnail.png' />
        <meta property='og:url' content='https://here-city.com/nbti' />
      </Helmet>
      <NbtiResult />
    </>
  );
};

export default NbtiResultPage;
