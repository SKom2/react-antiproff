import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WrappedApp from '@components/Layout/App/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>
);
