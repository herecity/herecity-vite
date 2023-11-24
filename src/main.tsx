import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.tsx';

if (process.env.NODE_ENV === 'development') {
  async function initMocks() {
    if (typeof window) {
      // const { worker } = await import('./mocks/worker');
      // worker.start();
    }
  }
  await initMocks();
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
