import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('@pages/home/HomePage'));
const RecordPage = lazy(() => import('@pages/record/RecordPage'));
const RecordResultPage = lazy(() => import('@pages/record/RecordResultPage'));
const CityBoardPage = lazy(() => import('@pages/cityboard/CityBoardPage'));
const NchelinPage = lazy(() => import('@pages/nchelin/Nchelin'));
const Nbti = lazy(() => import('@pages/nbti/Nbti'));
const NotFoundPage = lazy(() => import('@pages/NotFoundPage'));

const RootRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/record'>
            <Route index element={<RecordPage />} />
            <Route path='result' element={<RecordResultPage />} />
          </Route>
          <Route path='/city-board' element={<CityBoardPage />} />
          <Route path='/nkeyboard' element={<CityBoardPage />} />
          <Route path='/nchelin' element={<NchelinPage />} />
          <Route path='/nbti' element={<Nbti />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RootRoutes;
