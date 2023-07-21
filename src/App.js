import axios from 'axios';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Function to fetch data from the API using a CORS proxy
    const fetchData = async () => {
      try {
        const response = await axios.get("/v1/search/local.json", {
          params: {
            query: "여의도한강공원",
            display:1
          },
          headers: {
            'X-Naver-Client-Id': '6U2rWS_H78sSzQhpQHpT',
            'X-Naver-Client-Secret': 'V6_0mvK1kF'
          }
        });
        console.log(response.data); // Process the response data
      }catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div className="App">
      babo
      wa~~~~~~~~~~~~~
    </div>
  );
}

export default App;