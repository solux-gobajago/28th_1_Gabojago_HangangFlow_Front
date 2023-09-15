import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainApp from './App.js';
import Mypage from './pages/mypage.js';
import Login from './pages/login.js';
import Signup from './pages/signup.js';
import Detail from './pages/detail.js';
import CmApp from './pages/community.js';
import reportWebVitals from './reportWebVitals';
import { AnimatePresence } from "framer-motion";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*<React.StrictMode>*/
    <BrowserRouter>
      <Routes>
            <Route path='/' element={<MainApp />} />
            <Route path='/mypage' element={<Mypage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/detail' element={<Detail />} />
            <Route path='/community' element={<CmApp />} />
      </Routes>
    </BrowserRouter>
 /* </React.StrictMode>*/
);
reportWebVitals();