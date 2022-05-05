import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TextInput from './components/textInput';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('hi');
root.render(
  <React.StrictMode>
    <div id="main">
      <div id='content'>
        <h4>언제든지 간단하게</h4>
        <TextInput />
        <h5>Localstorage를 이용하고 있습니다.</h5>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
