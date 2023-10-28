import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";

import "./18.Advanced Redux/index.css";
import App from "./18.Advanced Redux/App";
import reportWebVitals from './reportWebVitals';

import store from "./18.Advanced Redux/store/index";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}><App /></Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
