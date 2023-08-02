import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import './detail.css';
import spinner from './Spin-0.6s-200px.gif';


const { kakao } = window;

function Nav(){
  return(
    <div className='navigator'>
      <nav className='nav'>
        <span className='buttons'>
          <Link to="/login" id='loginbutton'>Login</Link>
          <Link to="/community" id='communitybutton'>Community</Link>
        </span>
      </nav>
    </div>
  );
}


function Detail() {
  const location= useLocation();


  const [responseData, setResponseData] = useState(null);
  const park_name=location.state.parkTitle;
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await axios.get("/v2/local/search/keyword.json", {
          params: {
            query: park_name,
            size: 1
          },
          headers: {
            'Authorization': 'KakaoAK 2bab94d636ff301fb7cbd296fe2c7b92'
          }
        });
        setResponseData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [park_name]); // Empty dependency array to run the effect only once when the component mounts

  useEffect(() => {
    if (responseData && responseData.documents.length > 0) {
      const { x, y } = responseData.documents[0];
      // Your map code goes here...
      var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
            center: new kakao.maps.LatLng(y,x), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };  

      // 지도를 생성합니다    
      var map = new kakao.maps.Map(mapContainer, mapOption); 
      // Create the marker
      var marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(y, x),
        map: map
    });



    }
  }, [responseData]);

  const [currentImage, setCurrentImage] = useState(0);
  const images = [`${park_name}1.jpg`, `${park_name}2.jpg`, `${park_name}3.jpg`];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // 이미지 변경 주기를 5초로 설정 (5000ms)

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 interval 클리어
  }, [images.length]);


function Wholepage(){
  return(
    <div>
      <Nav></Nav>
  
  <div className="App">
    <div id="slider" style={{
      overflow: 'hidden',
      position: 'relative',
      width: '100%',
      height: '300px', // 이미지의 높이를 지정 (원하는 높이로 변경해주세요)
    }}>
      {images.map((image, index) => (
      <img
        key={index}
        src={require(`./parkimage/${image}`)}
        alt={park_name}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: index === currentImage ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      />
    ))}
    </div>
    <div id="represent">rep</div>
    <div className='main-text'>
    <p>
      {responseData
        ? responseData.documents.map((item, index) => (
            <span key={index}>{item.place_name}</span>
          ))
        : "Loading..."}
    </p>
    <p>
      {responseData
        ? responseData.documents.map((item, index) => (
            <span key={index}>{item.address_name}</span>
          ))
        : "Loading..."}
    </p>
    <p>
      {responseData
        ? responseData.documents.map((item, index) => (
            <span key={index}>{item.phone}</span>
          ))
        : "Loading..."}
    </p>
    </div>
    </div>
  <div id="map" style={{ width: "1000px", height: "400px", margin: "0 auto", marginTop: "200px"}}></div>


    </div>
  )
}

function Loading(){
  return(
    <div>
      <div style={{width:"100%", height:"100vh", backgroundColor:"rgba(75,75,75,0.4)"}}>
      <img src={spinner} id= "spinner" style={{position:"absolute"}} width="10%"></img>
      </div>
    </div>
  )
}

  return (
    <div>
      {responseData? <Wholepage></Wholepage>:
      <Loading></Loading>}
    </div>
  );


};


export default Detail;
