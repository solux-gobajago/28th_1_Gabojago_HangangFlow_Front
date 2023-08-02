import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import './detail.css';


const { kakao } = window;

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

function Detail() {
  const location= useLocation();

  console.log(location.state.parkTitle);

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
  }, []); // Empty dependency array to run the effect only once when the component mounts

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

  return (
    <div>
      <Nav></Nav>
  
      <div className="App">
        <div id="slider">pictures</div>
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
  );


};


export default Detail;
