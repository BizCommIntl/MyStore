import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppCtxProvider } from './AppCtxMain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppCtxProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppCtxProvider>

);
