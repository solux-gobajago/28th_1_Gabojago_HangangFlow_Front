import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Link } from 'react-router-dom';
import './login.css';

class home extends Component {

  render() {
    return (
        <div className='login-container'>
            <div className='login-box'>
            <div className='login-text'>
                ID <div>
                    
                    <input type='text'></input>
                </div>
                PASSWORD <div>
                    
                    <input type='text'></input>
                </div>
                <input type='button' value='SIGN IN'></input>
                <div><Link to="/signup">Join us?</Link></div>
            </div>    
            </div>
            
        </div>
    );
  }
}

export default home;