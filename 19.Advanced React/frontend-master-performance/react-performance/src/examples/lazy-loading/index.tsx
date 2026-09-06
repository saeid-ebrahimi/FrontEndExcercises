import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Application from './application';

import '$/common/index.css';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <Application />
    </StrictMode>
  );
}
