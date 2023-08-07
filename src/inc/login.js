import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';

function Home() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/login', {
        userId: username,
        password: password
      });

      // 서버로부터 온 응답 처리
      console.log(response.data);
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  {/*뒤로가기 기능*/}
  const handleGoBack = (event) => {
    if (event.target.classList.contains('x-icon')) {
      navigate(-1);
    }
  };

  return (
    <div className='login-container'>
      <div className='login-box'>
        <div className='login-text'>
          <h3>ID</h3>
          <div>
            <input
              type="text"
              placeholder="아이디"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <h3>PASSWORD</h3>
          <div>
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              <button onClick={handleLogin} className='signin-button'>SIGN IN</button>
            </div>
            <Link to='/signup' style={{marginLeft:'130px'}}>Join us?</Link>
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