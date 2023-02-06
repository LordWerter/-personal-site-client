import 'react-app-polyfill/stable';

import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { App } from './epics';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById("root");

const root = createRoot(container!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();
