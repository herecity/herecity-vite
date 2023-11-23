import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.tsx';

if (process.env.NODE_ENV === 'development') {
  async function initMocks() {
    if (typeof window === 'undefined') {
      const { server } = await import('./mocks/server');
      console.log(server);
      server.listen();
    } else {
      const { worker } = await import('./mocks/worker');
      worker.start();
    }
  }
  await initMocks();
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
