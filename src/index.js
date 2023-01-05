import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import App5 from "./App5";
import App6 from "./App6";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // strictMode : 자바스크립트의 문법을 엄격하게 확인한다는 의미
  // React.strictMode : 배포 버전에는 제외되고 개발 버전에서만 동작하는 엄격 모드, 몇 가지 함수를 중복 실행하여 잘못된 것이 없는지 개발자에게 확인하도록 함(생략가능)
  // <React.StrictMode>
  //    <App />
  //    <App2 />
  //    <App3 />
  //    <App4 />
  //   <App5 />
    <App6 />
  // </React.StrictMode>
);


reportWebVitals();
