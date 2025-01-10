import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App"
import { ThemeProvider } from '@mui/material';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);

