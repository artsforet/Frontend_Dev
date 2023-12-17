import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BgmSite from './pages/BgmSite';
import Payments from './payments/Payments';
import Login from './pages/Login/Login';


import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();