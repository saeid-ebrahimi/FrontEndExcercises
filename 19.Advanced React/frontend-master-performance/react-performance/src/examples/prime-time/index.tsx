import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './application';

import '$/common/index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element. 😵‍💫');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
);
