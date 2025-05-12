import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { SWRConfig } from 'swr';
import App from './App';

const config = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  throwOnError: false,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SWRConfig value={config}>
      <App />
    </SWRConfig>
  </React.StrictMode>
);
