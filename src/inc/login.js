import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

function Home() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className='login-container' onClick={handleGoBack}>
      <div className='login-box'>
        <div className='login-text'>
          ID
          <div>
            <input type='text'></input>
          </div>
          PASSWORD
          <div>
            <input type='text'></input>
          </div>
          <input type='button' value='SIGN IN'></input>
          <div>
            <Link to='/signup'>Join us?</Link>
          </div>
        </div>
        <button className='close-button' onClick={handleGoBack}>
        <span className='x-icon'>✕</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
