import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Nchelin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.alert('페이지 업데이트 중이에요!\n조금만 기다려주세요');
    navigate('/', { replace: true });
  }, []);

  return <div>Nchelin</div>;
};

export default Nchelin;
