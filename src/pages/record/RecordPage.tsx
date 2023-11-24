import Record from '@components/record/Record';
import { Helmet } from 'react-helmet';

const RecordPage = () => {
  return (
    <div>
      <Helmet>
        <title>히어시티 | 레코드샵</title>
        <meta property='og:site_name' content='히어시티' />
        <meta name='description' content='엔시티 플레이리스트 #히어시티' />
        <meta
          property='og:title'
          content='엔시티 키워드별 플레이리스트 #히어시티 #레코드샵'
        />
        <meta
          name='description'
          content='엔시티 키워드별 플레이리스트를 간편하게 만들어보새요! #히어시티'
        />
        <meta property='og:image' content='/assets/images/main_thumbnail.png' />
        <meta property='og:url' content='https://here-city.com/record' />
      </Helmet>
      <Record />;
    </div>
  );
};

export default RecordPage;
