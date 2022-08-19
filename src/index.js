import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Synths from './Pages/Synths';
import Lofi from './Pages/Lofi';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
  <Route path="/" element = {<App />}></Route>
  <Route path="/Synths" element = {<Synths />}></Route>
  <Route path="/Lofi" element = {<Lofi />}></Route>
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
