import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const { kakao } = window;

function App() {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/v2/local/search/keyword.json", {
          params: {
            query: "망원한강공원",
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

    document.getElementById("babo").style.backgroundColor="red";
    document.getElementById("babo").style.color="blue";


    }
  }, [responseData]);

  return (
    <div>
      <header></header>
      <div className="App">
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
      <div id="map" style={{ width: "1000px", height: "400px" }}></div>
    
    </div>
  );
}

export default App;
