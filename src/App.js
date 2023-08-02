import React, { useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Detail from './inc/detail.js';
import Community from './inc/community.js';

function Nav(){
  return(
    <div className='navigator'>
      <nav className='nav' >
        <div className='buttons'>
          <Link to="/login" id='loginbutton'> Login </Link>
          <Link to="/community" id='communitybutton'> Community </Link>
        </div>
      </nav>
    </div>
  );
}

function Sidebar() {
  const [selected, setSelected] = React.useState([]);
  
  
  const clickkeyword = (event) => {
    const value = event.target.getAttribute('value');
  
    if (!selected.includes(value)){
      setSelected([...selected, value]);
    }
    
    //console.log(selected.length); // Just to verify the selected values, you can remove this line later

  };

  return (
    <div>
      <div className='sidebar'>
        <div className='keywords-box'>
          <span id='keyword' value='1' onClick={clickkeyword}>1</span>
          <span id='keyword' value='2' onClick={clickkeyword}>2</span>
          <span id='keyword' value='3' onClick={clickkeyword}>3</span>
          <span id='keyword' value='4' onClick={clickkeyword}>4</span>
          <span id='keyword' value='5' onClick={clickkeyword}>5</span>
          <span id='keyword' value='6' onClick={clickkeyword}>6</span>
          <span id='keyword' value='7' onClick={clickkeyword}>7</span>
          <span id='keyword' value='8' onClick={clickkeyword}>8</span>
          <span id='keyword' value='9' onClick={clickkeyword}>9</span>
        </div>
      </div>
      
      <div className='print-selected'>
        <h1>{selected+"...에 맞는 한강공원 검색 결과"}</h1>
      </div>
    </div>
  );
}


function Parks(props) {

  const park_list = [
    { title: "광나루한강공원", location:"서울 강동구 천호동 351-1" },
    { title: "강서한강공원", location:"서울 강서구 개화동 276-1" },
    { title: "난지한강공원", location:"서울 마포구 상암동 495-72" },
    { title: "뚝섬한강공원", location:"서울 광진구 자양동 427-6" },
    { title: "망원한강공원", location:"서울 마포구 망원동 205-4" },
    { title: "반포한강공원", location:"서울 서초구 반포2동 115-5" },
    { title: "양화한강공원", location:"서울 영등포구 당산동 96-1" },
    { title: "여의도한강공원", location:"서울 영등포구 여의도동 85" },
    { title: "이촌한강공원", location:"서울 용산구 이촌동 302-17" },
    { title: "잠실한강공원", location:"서울 송파구 잠실동 1-1" },
    { title: "잠원한강공원", location:"서울 강남구 압구정동 386" }
  ];
  
  
  const View_park = (park) => {
    // Park 컴포넌트를 반환하여 각 공원을 렌더링합니다.
    const navigate = useNavigate(); //detail 페이지에 값 전달
    const handleParkClick = () => {
      // When the <div> is clicked, navigate to the '/detail' page with the parkTitle in state.
      navigate('/detail', { state: { parkTitle: park.title } });
    };
  
    return (
      <div key={park.title} className="park-box" id={park.title} onClick={handleParkClick}>
        <h3>{park.title}</h3>
        <p>{park.location}</p>
      </div>
    );
  };




  return (
    <div className="parks-container">

      <div id="parks-container">
      {park_list.map(View_park)} 
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
        <div className="container">
        <Parks></Parks>
        </div>
      </div>
    </div>
    
    );
}
export default App;
