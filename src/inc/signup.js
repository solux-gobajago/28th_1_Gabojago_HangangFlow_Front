import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userNameErrorMessage, setUserNameErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');

  const handleGoBack1 = (event) => {
    if (event.target.classList.contains('backbutton')) {
      navigate(-1);
    }
  };

  const handleGoBack2 = (event) => {
    if (event.target.classList.contains('x-icon')) {
      navigate(-2);
    }
  };

  const handleCheckUserNameAvailability = () => {
    // 아이디 사용 가능한지 체크하는 기능으로 바꾸기 DB에 있으면 오류메세지
    // For this example, we will just check if the username is not empty
    if (!userId) {
      setUserNameErrorMessage('Please enter a valid ID.');
    } else {
      setUserNameErrorMessage('사용가능한 아이디입니다.');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);

    if (e.target.value !== password) {
      setPasswordMatchError('Passwords do not match.');
    } else {
      setPasswordMatchError('Passwords match.');
    }
  };

  const handleSignUp = async () => {
    try {
      console.log("check---- handleLogin");
      const response = await axios.post('/api/register', {
        userId: userId,
        password: password,
        passwordCheck: confirmPassword,
        email: email,
        nickname: nickname

      });

      console.log("check------------------", userId);
      console.log("check--------------", password);

   
      console.log(response.data); 
    } catch (error) {
      console.error('회원가입 실패:', error);
    }

    // 로그인
    // 입력한 정보들을 DB에 넘기기
  
  };

  return (
    <div className='signup-container'>
      <div className='signup-title'>Sign Up</div>
      <div className='signup-box'>
        <span className='backbutton' onClick={handleGoBack1}>←</span>
        <button className='close-button'>
          <span className='x-icon' onClick={handleGoBack2}>✕</span>
        </button>
        <div className='signup-text'>
          <div className='signup'>
            <span>ID</span> <input type='text' value={userId} onChange={(e) => setUserId(e.target.value)} />
            <button onClick={handleCheckUserNameAvailability}>Check for the availability of the ID.</button>
            <div className={userNameErrorMessage === 'Please enter a valid ID.' ? 'error-message' : "success-message"}>{userNameErrorMessage}</div>
          </div>
          <div className='signup'>
            <span>Nickname</span> <input type='text' value={nickname} onChange={(e) => setNickname(e.target.value)} />
          </div>
          <div className='signup'>
            <span>E-mail</span> <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className='signup'>
            <span>Password</span> <input type='password' value={password} onChange={handlePasswordChange} />
          </div>

          <div className='signup'>
            <span>Confirm Password</span> <input type='password' value={confirmPassword} onChange={handleConfirmPasswordChange} />
            <div className={passwordMatchError === 'Passwords match.' ? 'success-message' : 'error-message'}>
              {passwordMatchError}
            </div>
          </div>

          <button className='signup-button' onClick={handleSignUp} disabled={password !== confirmPassword || nickname=='' || email=='' || password=='' || userId==''}>
            Sign Up
          </button>
        
      </div>
    </div>
  
  </div>);}


export default Signup;
