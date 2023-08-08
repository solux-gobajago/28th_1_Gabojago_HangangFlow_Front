import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import MainApp from '../App.js'; //상위

function Home() {
  const [logstate, setLogstate]=useState("logouttttt"); //로그인 상태
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      console.log("check---- handleLogin");
      const response = await axios.post('/api/login', {
        userId: username,
        password: password
      });

      console.log("check------------------", username);
      console.log("check--------------", password);

      // 서버로부터 온 응답 처리
      console.log(response.data); //로그인에 성공했습니다
      navigate(-1);
      alert("로그인에 성공했습니다. 메인 페이지로 돌아갑니다.");
      setLogstate("login"); //로그인 상태로 바꾸기
      MainApp.getelementbyID("loginbutton").innerText="qkqh";
      
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
              자동 로그인 
            <input
              type="checkbox"
              id="remember-me"
              name="remember-me"
              
            />
            </div>
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

export default Home; // Home 컴포넌트를 default로 내보내기
export const logstate = "LOG IN";  // logstate 변수도 내보내기