import React, { useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import axios from 'axios';
import './App.css';
import './index.css';
import Mypage from './inc/mypage.js';
import Login from './inc/login.js';
import Signup from './inc/signup.js';
import Detail from './inc/detail.js';
import CmApp from './inc/community.js';

function Nav(){
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
            <Link to="/login" id='loginbutton'> LOG IN </Link>
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
    console.log("check-------------value", value);
    if (!selected.includes(value)){
      setSelected([...selected, value]);
      console.log("check1--------------");
      event.target.style.backgroundColor="grey";
      event.target.classList.add('selected'); // selected 배열에 키워드 추가
    }

    else{
      console.log("check---------------2")
      setSelected(selected.filter(item => item !== value));
      event.target.style.backgroundColor="rgba(234, 234, 234, 0.9)";
      event.target.classList.remove('selected'); //  selected 배열에 키워드 삭제
    }
    console.log(selected);
    //console.log(selected.length); // Just to verify the selected values, you can remove this line later

  };

  const sendkeyword = async() => {
    
    //flask 로 selected 배열 보내기
    try {
      console.log("check------------------", selected);
      const response = await axios.post('/data/park_keywords', {
        keywords: selected
      });

      

      // 서버로부터 온 응답 처리
      console.log(response.data); //전송에 성공했습니다
    } catch (error) {
      console.error('키워드 전송 실패:', error);
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
        <button onClick={sendkeyword}>SEND</button>
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


function Parks() {

  const park_list = [
    { title: "광나루한강공원", location:"서울 강동구 천호동" },
    { title: "강서한강공원", location:"서울 강서구 개화동" },
    { title: "난지한강공원", location:"서울 마포구 상암동" },
    { title: "뚝섬한강공원", location:"서울 광진구 자양동" },
    { title: "망원한강공원", location:"서울 마포구 망원동" },
    { title: "반포한강공원", location:"서울 서초구 반포2동" },
    { title: "양화한강공원", location:"서울 영등포구 당산동" },
    { title: "여의도한강공원", location:"서울 영등포구 여의도동" },
    { title: "이촌한강공원", location:"서울 용산구 이촌동" },
    { title: "잠실한강공원", location:"서울 송파구 잠실동" },
    { title: "잠원한강공원", location:"서울 강남구 압구정동" }
  ];
  
  
  const View_park = (park) => {
    // Park 컴포넌트를 반환하여 각 공원을 렌더링합니다.
    const navigate = useNavigate(); //detail 페이지에 값 전달
    const handleParkClick = () => {
      // When the <div> is clicked, navigate to the '/detail' page with the parkTitle in state.
      navigate('/detail', { state: { parkTitle: park.title } });
    };
  
    return (
      <div key={park.title} className="app-park-box" id={park.title} onClick={handleParkClick}>
        <h3>{park.title}</h3>
        <p style={{marginLeft:"40px", marginBottom:"8px"}}>{park.location}</p>
      </div>
    );
  };




  return (
    <div className="app-parks-container">

      <div id="app-parks-container">
      {park_list.map(View_park)} 
      </div>
    </div>
  );
}

function MainApp(){
  return(
  <div className="app-main-container">
    <Nav></Nav>
    <div className="app-content-container">
    
      <Sidebar></Sidebar>
      <div className="app-container">
      <Parks></Parks>
      </div>
    </div>
  </div>
  
  );
}

export default MainApp;
