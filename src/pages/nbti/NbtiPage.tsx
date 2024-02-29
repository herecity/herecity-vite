import Nbti from '@components/nbti/Nbti';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NbtiPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.alert('페이지 업데이트 중이에요!\n조금만 기다려주세요');
    navigate('/', { replace: true });
  }, []);

  return <Nbti />;
};

export default NbtiPage;
