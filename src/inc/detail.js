import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import './detail.css';
import spinner from './Spin-0.6s-200px.gif';

const { kakao } = window;

function Nav() {
  return (
    <div className='navigator'>
      <nav className='nav'>
        <span className='buttons'>
          <Link to="/" id='homebutton'>HG FLOW </Link>
          <Link to="/login" id='loginbutton'></Link>
          <Link to="/community" id='communitybutton'>Community</Link>
        </span>
      </nav>
    </div>
  );
}

function Detail() {
  const location = useLocation();

  const [responseData, setResponseData] = useState(null);
  const park_name = location.state.parkTitle;
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
  }, [park_name]);

  useEffect(() => {
    if (responseData && responseData.documents.length > 0) {
      const { x, y } = responseData.documents[0];
      var mapContainer = document.getElementById('map');
      var mapOption = {
        center: new kakao.maps.LatLng(y, x),
        level: 3
      };
      var map = new kakao.maps.Map(mapContainer, mapOption);
      var marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(y, x),
        map: map
      });
    }
  }, [responseData]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [`${park_name}1.jpg`, `${park_name}2.jpg`, `${park_name}3.jpg`];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='detail'>
      {responseData ? (
        <div className='whole-container'>
          <Nav />

          <div className="App">
            <div
              id="slider-container"
              style={{
                position: 'relative',
                width: '100%',
                height: '300px',
              }}
            >
              <span className="slider-button slider-button-prev" onClick={handlePrevImage}>&lt;</span>
              <span className="slider-button slider-button-next" onClick={handleNextImage}>&gt;</span>
              <div
                id="slider"
                style={{
                  overflow: 'hidden',
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                }}
              >
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
                      opacity: index === currentImageIndex ? 1 : 0,
                      transition: 'opacity 0.5s ease-in-out',
                    }}
                  />
                ))}
              </div>
            </div>
            <div id="represent">rep</div>
            <div className='app-main-text'>
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
            <div id="map" style={{ width: "1000px", height: "400px", margin: "0 auto", marginTop: "50px" }}></div>
          </div>
        </div>
      ) : (
        <div>
          <div style={{ width: "100%", height: "100vh", backgroundColor: "rgba(75,75,75,0.4)" }}>
            {/* <img src={spinner} id="spinner" style={{ position: "absolute" }} width="10%" alt="Loading" /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
