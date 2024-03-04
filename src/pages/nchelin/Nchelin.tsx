import Nchelin from '@components/nchelin/Nchelin';
import { Helmet } from 'react-helmet';

const NchelinPage = () => {
  return (
    <>
      <Helmet>
        <title>히어시티 | 엔슐랭</title>
        <meta property='og:site_name' content='히어시티' />
        <meta property='og:title' content='엔시티 맛시태그 #히어시티 #NBTI' />
        <meta
          name='description'
          content='엔시티 맛시태그 모아서 검색! #히어시티'
        />
        <meta property='og:image' content='/assets/images/main_thumbnail.png' />
        <meta property='og:url' content='https://here-city.com/nchelin' />
      </Helmet>
      <Nchelin />;
    </>
  );
};

export default NchelinPage;
