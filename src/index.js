import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainApp from './App.js';
import Login from './inc/login.js';
import Signup from './inc/signup.js';
import Detail from './inc/detail.js';
import CmApp from './inc/community.js';
import reportWebVitals from './reportWebVitals';
import { AnimatePresence } from "framer-motion";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AnimatePresence>
      <BrowserRouter>
        <Routes>
              <Route path='/' element={<MainApp />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/detail' element={<Detail />} />
              <Route path='/community' element={<CmApp />} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  </React.StrictMode>
);


reportWebVitals();