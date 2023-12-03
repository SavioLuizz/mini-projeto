import React from 'react';
import ReactDOM from 'react-dom/client';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';

import Routes from './Routes';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import '@radix-ui/themes/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Theme appearance="dark">
      <Routes />
      <ToastContainer />
    </Theme>
  </React.StrictMode>
);

