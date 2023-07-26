import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './index.css';
import Ex1 from './Ex1/Ex1';
import Ex2 from './Ex2/Ex2';
import Ex3 from './Ex3/Ex3';
import Ex4 from './Ex4/Ex4';
import Ex5 from './Ex5/Ex5';
import Ex6 from './Ex6/Ex6';
import Ex7 from './Ex7/Ex7';
import Ex9 from './Ex9/Ex9';
import Ex10 from './Ex10/Ex10';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Ex10></Ex10>
      <Routes>
        <Route path='/' element={<Ex1></Ex1>}></Route>
        <Route path='/exercise2' element={<Ex2></Ex2>}></Route>
        <Route path='/exercise3' element={<Ex3></Ex3>}></Route>
        <Route path='/exercise4' element={<Ex4></Ex4>}></Route>
        <Route path='/exercise5' element={<Ex5></Ex5>}></Route>
        <Route path='/exercise6' element={<Ex6></Ex6>}></Route>
        <Route path='/exercise7' element={<Ex7></Ex7>}></Route>
        <Route path='/exercise9' element={<Ex9></Ex9>}></Route>
      </Routes>
    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
