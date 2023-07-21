import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    // Function to fetch data from the API using a CORS proxy
    const fetchData = async () => {
      try {
        const response = await axios.get("/v1/search/local.json", {
          params: {
            query: "망원한강공원",
            display: 1
          },
          headers: {
            'X-Naver-Client-Id': '6U2rWS_H78sSzQhpQHpT',
            'X-Naver-Client-Secret': 'V6_0mvK1kF'
          }
        });
        console.log(response.data); // Process the response data
        setResponseData(response.data); // Save the response data to the state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div className="App">
      {/* Replace the content inside the p tag with responseData */}
      <p>{responseData ? responseData.items.map((item, index) => (
              <span key={index}>{item.address}</span>
            )) : "Loading..."}
      </p>

      <p>{responseData.items.map((item, index) => (
            <h1 key={index}>{item.link}</h1>
          ))}
      </p>
      <p>{false ? responseData.items.map((item, index) => (
              <span key={index}>{item.address}</span>
            )) : "Loading..."}
      </p>
    </div>
  );
}

export default App;