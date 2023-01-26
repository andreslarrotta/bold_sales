import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { SalesProviders } from './context/sales-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SalesProviders>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SalesProviders>
);
