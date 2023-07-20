import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Ex1 from './Ex1/Ex1';
import Ex2 from './Ex2/Ex2';
import Ex3 from './Ex3/Ex3';
import Ex4 from './Ex4/Ex4';
import Ex5 from './Ex5/Ex5';
import Ex6 from './Ex6/Ex6';
import Ex7 from './Ex7/Ex7';
import Ex9 from './Ex9/Ex9';




import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Ex1></Ex1>
    <Ex2></Ex2>
    <Ex3></Ex3>
    <Ex4></Ex4>
    <Ex5></Ex5>
    <Ex6></Ex6>
    <Ex7></Ex7>
    <Ex9></Ex9>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
