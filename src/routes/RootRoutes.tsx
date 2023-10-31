import NotFoundPage from '@pages/NotFoundPage';
import CityBoard from '@pages/cityboard/CityBoard';
import HomePage from '@pages/home/HomePage';
import Nbti from '@pages/nbti/Nbti';
import Nchelin from '@pages/nchelin/Nchelin';
import RecordPage from '@pages/record/RecordPage';
import RecordResultPage from '@pages/record/RecordResultPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const RootRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/record'>
          <Route index element={<RecordPage />} />
          <Route path='result' element={<RecordResultPage />} />
        </Route>
        <Route path='/city-board' element={<CityBoard />} />
        <Route path='/nchelin' element={<Nchelin />} />
        <Route path='/nbti' element={<Nbti />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoutes;
