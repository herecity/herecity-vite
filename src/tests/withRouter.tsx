import { ReactElement } from 'react';
import { MemoryRouter, Routes } from 'react-router-dom';

export function withRouter(routes: ReactElement, initialEntry = '/') {
  return (
    <MemoryRouter initialEntries={[initialEntry]}>
      <Routes>{routes}</Routes>
    </MemoryRouter>
  );
}
