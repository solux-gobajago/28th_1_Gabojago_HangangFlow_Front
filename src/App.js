import React, { useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Detail from './inc/detail.js';
import Community from './inc/community.js';

function Nav(){
  return(
    <div className='navigator'>
      <nav className='nav'>
        <span className='buttons'>
          <Link to="/login">Login</Link>
          <Link to="/community">Community</Link>
        </span>
      </nav>
    </div>
  );
}

function Sidebar(){
  return(
    <div className='sidebar'>
      키워드를 선택하세요
      <ul>
        <li>메뉴 항목 1</li>
        <li>메뉴 항목 2</li>
        <li>메뉴 항목 3</li>
      </ul>
    </div>

  );
}

function Parks(props) {
  const park_list = [
    { title: "광나루한강공원" },
    { title: "강서한강공원" },
    { title: "난지한강공원" },
    { title: "뚝섬한강공원" },
    { title: "망원한강공원" },
    { title: "반포한강공원" },
    { title: "양화한강공원" },
    { title: "여의도한강공원" },
    { title: "이촌한강공원" },
    { title: "잠실한강공원" },
    { title: "잠원한강공원" }
  ];

  const view_park = (park) => {
    // Park 컴포넌트를 반환하여 각 공원을 렌더링합니다.
    return (
      <div key={park.title} className="park-box" id={park.title} onClick={useNavigate}>
        {park.title}
      </div>
    );
  };

  return (
    <div className="parks-container">
      <h2 id='park-word'>에 맞는 한강공원 검색결과...</h2>
      <div id="parks-container">
      {park_list.map(view_park)} 
      </div>
    </div>
  );
}

function App(){
    return(
    <div className="main-container">
      <Nav></Nav>
      <div className="content-container">
        <Sidebar></Sidebar>
        <Parks></Parks>
      </div>
    </div>
    
    );
}
export default App;
