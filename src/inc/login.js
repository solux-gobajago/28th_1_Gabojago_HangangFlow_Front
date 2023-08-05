import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

function Home() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className='login-container' onClick={handleGoBack}>
      <div className='login-box'>
        <div className='login-text'>
          <h3>ID</h3>
          <div>
            <input type='text'></input>
          </div>
          <h3>PASSWORD</h3>
          <div>
            <input type='text'></input>
          </div>
          <input type='button' value='SIGN IN'></input>
          <div>
            <Link to='/signup'>Join us?</Link>
          </div>
        </div>
        <button className='close-button'>
        <span className='x-icon' onClick={handleGoBack}>✕</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
