import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/pages/home/Home';
import Record from '../components/pages/record/Record';
import CityBoard from '../components/pages/cityboard/CityBoard';
import Nchelin from '@components/pages/nchelin/Nchelin';
import Nbti from '@components/pages/nbti/Nbti';

const RootRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/record' element={<Record />} />
        <Route path='/city-board' element={<CityBoard />} />
        <Route path='/nchelin' element={<Nchelin />} />
        <Route path='/nbti' element={<Nbti />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoutes;
