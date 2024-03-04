import NbtiResultPage from '@pages/nbti/NbtiResultPage';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

const HomePage = lazy(() => import('@pages/home/HomePage'));
const RecordPage = lazy(() => import('@pages/record/RecordPage'));
const RecordResultPage = lazy(() => import('@pages/record/RecordResultPage'));
const CityBoardPage = lazy(() => import('@pages/cityboard/CityBoardPage'));
const NchelinPage = lazy(() => import('@pages/nchelin/Nchelin'));
const Nbti = lazy(() => import('@pages/nbti/NbtiPage'));
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
          <Route path='/nkeyboard' element={<Navigate to='/city-board' />} />
          <Route path='/nchelin' element={<NchelinPage />} />
          <Route path='/nbti'>
            <Route index element={<Nbti />} />
            <Route path='result' element={<NbtiResultPage />} />
          </Route>

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RootRoutes;
