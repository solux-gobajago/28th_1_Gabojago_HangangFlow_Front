import React, { useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Link, json, Form } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import axios from 'axios';
import './App.css';
import './index.css';

import Mypage from './inc/mypage.js';
import Login from './inc/login.js';
import Signup from './inc/signup.js';
import Detail from './inc/detail.js';
import CmApp from './inc/community.js';

function Nav(props){
  const [logstate, setLogstate]=React.useState("LOG IN");
  // if (props==="LOG OUT"){
  //   setLogstate("LOG OUT");
  // }
  return(
    <div className='navigator'>
      <nav className='nav' >
        <div className='buttons'>
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames="button"
            unmountOnExit
          >
            <Link to="/" id='homebutton'>HG FLOW </Link>
          </CSSTransition>
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames="button"
            unmountOnExit
          >
            <Link to="/login" id='loginbutton'> {logstate} </Link>
          </CSSTransition>
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames="button"
            unmountOnExit
          >
            <Link to="/community" id='communitybutton'> Community </Link>
          </CSSTransition>
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames="button"
            unmountOnExit
          >
            <Link to="/mypage" id='mypagebutton'> MY PAGE </Link>
          </CSSTransition>
        </div>
      </nav>
    </div>
  );
}

function Sidebar() {
  const [selected, setSelected] = React.useState([]); //selected 배열에 클릭한 키워드 저장됨
  
  
  const clickkeyword = (event) => {
    const value = event.target.getAttribute('value');
    
    if (!selected.includes(value)){
      setSelected([...selected, value]);
      event.target.style.backgroundColor="grey";
      event.target.classList.add('selected'); // selected 배열에 키워드 추가
    }

    else{
  
      setSelected(selected.filter(item => item !== value));
      event.target.style.backgroundColor="rgba(234, 234, 234, 0.9)";
      event.target.classList.remove('selected'); //  selected 배열에 키워드 삭제
    }
    
    //console.log(selected.length); // Just to verify the selected values, you can remove this line later

  };

  // const sendkeyword = async() => {
    
  //   //flask 로 selected 배열 보내기
  //   try {
  //     // console.log(selected.length);
  //     // console.log(JSON.stringify(selected));
  //     // console.log("check------------------배열", JSON.stringify(selected));
    
  //     const  data  = { keywords : selected};
      
  //     // const response = await axios.post('/data/keywords', data); //키워드 전송
      
  //     // 배열을 쿼리 문자열로 직렬화
  //     const queryString = selected.map(keyword => `keyword=${encodeURIComponent(keyword)}`).join('&');
  //     // selected.map(keyword=> console.log(keyword));
  //     // console.log("이게 쿼리스트링!!!",queryString);
  //     // const parkselectedlist = await axios.get('/api/parkInfo/searchpark?keyword="키워드1"&"키워드"'); //공원 리스트 받아오기
  //     // console.log("check ----- parklist", parkselectedlist);
  //     console.log("hihihihihihihi", queryString);
  //     const parkselectedlist = await axios.get(`/api/parkInfo/searchpark?${queryString}`);
  //     console.log("check ----- parklist", parkselectedlist);
  //   } catch (error) {
  //     console.error('키워드 전송 실패:', error);
  //   }
  // };

  // 체크
  const sendkeyword = async () => {
    try {
        console.log("selected-----", selected);
        const queryString = selected.map(keyword => `keyword=${encodeURIComponent(keyword)}`).join('&');
        console.log("query-string------", queryString);
        const response = await axios.get(`/api/parkInfo?${queryString}`); // 수정된 부분
        console.log("parklist-------", response.data);
    } catch (error) {
        console.error('키워드 전송 실패:', error);
    }
};

  const getselectedparks = async () => {
    try {
      
    } catch (error) {
      console.log("공원 리스트 받아오기 실패:", error);
    }
  };

  

  return (
    <div>
      <div className='sidebar'>
        <div className='keywords-box'>
          <span id='keyword' value='운동' onClick={clickkeyword}>운동</span>
          <span id='keyword' value='산책' onClick={clickkeyword}>산책</span>
          <span id='keyword' value='자전거' onClick={clickkeyword}>자전거</span>
          <span id='keyword' value='라이딩' onClick={clickkeyword}>라이딩</span>
          <span id='keyword' value='야구장' onClick={clickkeyword}>야구장</span>
          <span id='keyword' value='수영장' onClick={clickkeyword}>수영장</span>
          <span id='keyword' value='드론' onClick={clickkeyword}>드론</span>
          <span id='keyword' value='페스티벌' onClick={clickkeyword}>페스티벌</span>
          <span id='keyword' value='콘서트' onClick={clickkeyword}>콘서트</span>
          <span id='keyword' value='불꽃놀이' onClick={clickkeyword}>불꽃놀이</span>
          <span id='keyword' value='야경' onClick={clickkeyword}>야경</span>
          <span id='keyword' value='주차장' onClick={clickkeyword}>주차장</span>
          <span id='keyword' value='화장실' onClick={clickkeyword}>화장실</span>
          <span id='keyword' value='대중교통' onClick={clickkeyword}>대중교통</span>
          <span id='keyword' value='편의점' onClick={clickkeyword}>편의점</span>
          <span id='keyword' value='데이트' onClick={clickkeyword}>데이트</span>
          <span id='keyword' value='피크닉' onClick={clickkeyword}>피크닉</span>
          <span id='keyword' value='돗자리' onClick={clickkeyword}>돗자리</span>
          <span id='keyword' value='나들이' onClick={clickkeyword}>나들이</span>
          <span id='keyword' value='휴식' onClick={clickkeyword}>휴식</span>
          <span id='keyword' value='깨끗' onClick={clickkeyword}>깨끗</span>
          <span id='keyword' value='자연' onClick={clickkeyword}>자연</span>
          <span id='keyword' value='습지' onClick={clickkeyword}>습지</span>
          <span id='keyword' value='치킨' onClick={clickkeyword}>치킨</span>
          <span id='keyword' value='카페' onClick={clickkeyword}>카페</span>
          <span id='keyword' value='라면' onClick={clickkeyword}>라면</span>

        </div>
        <button id='sendbutton' onClick={sendkeyword} disabled={selected.length>3}>SEND</button>
        <button onClick={getselectedparks}>parks</button>
      </div>
      
      <div className='app-print-selected'>
        <h2>{(
      <>
        {selected.map((keyword) => (
          <SelectedKeyword key={keyword} keyword={keyword} />
        ))}
        에 맞는 한강공원 검색 결과
      </>
    ) }</h2>
      </div>
        {/* 기존의 Parks 자리 */}
        {/* <Parks props={parkalllist}/> */}
        


    </div>
  );
}

function SelectedKeyword({ keyword }) {

  const keywordColors = [
    { keyword: '운동', color: 'pink' },
    { keyword: '산책', color: 'pink' },
    { keyword: '자전거', color: 'pink' },
    { keyword: '라이딩', color: 'pink' },
    { keyword: '야구장',color: 'pink' },
    { keyword: '수영장',color: 'pink' },
    { keyword: '드론', color: 'lightblue' },
    { keyword: '페스티벌', color: 'orange' },
    { keyword: '콘서트', color: 'orange' },
    { keyword: '불꽃놀이', color: 'orange' },
    { keyword: '야경', color: 'orange' },
    { keyword: '주차장', color: 'purple' },
    { keyword: '화장실', color: 'purple' },
    { keyword: '대중교통', color: 'purple' },
    { keyword: '편의점', color: 'purple' },
    { keyword: '데이트', color: 'lightgreen' },
    { keyword: '피크닉', color: 'lightgreen' },
    { keyword: '돗자리', color: 'lightgreen' },
    { keyword: '나들이', color: 'lightgreen' },
    { keyword: '휴식', color: 'lightgreen' },
    { keyword: '깨끗', color: 'lightgreen' },
    { keyword: '자연', color: 'lightgreen' },
    { keyword: '습지', color: 'lightgreen' },
    { keyword: '치킨', color: 'yellow' },
    { keyword: '카페', color: 'purple' },
    { keyword: '라면', color: 'yellow' }

  ];
  
  // 색상 정보를 찾아옵니다.
  const keywordColor = keywordColors.find(item => item.keyword === keyword);
  // 색상이 없는 경우 기본 색상을 지정합니다.
  const backgroundColor = keywordColor ? keywordColor.color : 'grey';
  
 
  const selectedStyle = {
    backgroundColor,
    padding: '5px 10px',
    borderRadius: '15px',
    color: 'white',
    marginRight: '5px',
  };

  return <span style={selectedStyle}>{keyword}</span>;
}


function Parks(props) {
  const navigate = useNavigate();

  const View_park = React.useCallback((park) => {
    const handleParkClick = () => {
      navigate('/detail', { state: { parkTitle: park.parkName } });
    };

    return (
      <div key={park.parkName} className="app-park-box" id={park.parkName} onClick={handleParkClick}>
        <h3>{park.parkName}</h3>
        <p style={{ marginLeft: "40px", marginBottom: "8px" }}>{park.parkAddress}</p>
      </div>
    );
  }, [navigate]);

  return (
    <div className="app-parks-container">
      <div id="app-parks-container">
        {props.parklist.map(park => View_park(park))}
      </div>
    </div>
  );
}

function MainApp() {
  const [parklist, setParklist] = React.useState([]);

  React.useEffect(() => {
    const getallparks = async () => {
      try {
        const parkalllist = await axios.get('/api/parkInfo/parkList');
        setParklist(parkalllist.data);
      } catch (error) {
        console.log("공원 전체 받아오기 실패:", error);
      }
    };

    getallparks();

  }, []);

  return (
    <div className="app-main-container">
      <Nav></Nav>
      <div className="app-content-container">
        <Sidebar></Sidebar>
        <div className="app-container">
          <Parks parklist={parklist}></Parks>
        </div>
      </div>
    </div>
  );
}


export default MainApp;
