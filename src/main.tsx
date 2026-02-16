import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

import './index.css';
import 'theme-toggles/css/classic.css';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
