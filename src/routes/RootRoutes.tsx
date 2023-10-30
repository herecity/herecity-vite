import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CityBoard from '../pages/cityboard/CityBoard';
import Nchelin from '../pages/nchelin/Nchelin';
import Nbti from '../pages/nbti/Nbti';
import RecordPage from '../pages/record/RecordPage';
import RecordResultPage from '../pages/record/RecordResultPage';
import HomePage from '../pages/home/HomePage';

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
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoutes;
