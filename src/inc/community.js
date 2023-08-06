import './community.css';

import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import {HeartOutlined, HeartFilled} from '@ant-design/icons';
import './style.css'

class LikeButton extends React.Component {
  state = {
    isChecked: false,
    notice: '',
  };

  onClick = () => {
    // 버튼을 누를때마다
    this.state.isChecked
      ? this.setState({
          isChecked: false, // isChecked를 false로 초기화
          notice: '', // 알림은 안뜨게 만듬
        })
      : this.setState({
          // isChecked가 false면(하트를 검은색에서 빨간색으로
          isChecked: true, // isChecked를 true로 초기화
          notice: '1', // 알림이 나오게 설정
        });
  };

  render() {
    return (
      <React.Fragment>
        <div className="icons-list">

          {this.state.isChecked ? (
            <HeartFilled style={{ color: 'red', fontSize: '20px' }} onClick={this.onClick} />
          ) : (
            //꽉차있는 하트를 return
            <HeartOutlined className="heartbutton" onClick={this.onClick} />
          )}
          <h3 id="text">{this.state.notice}</h3>
          &nbsp; {/* Space between buttons */}
          &nbsp; {/* Space between buttons */}
          &nbsp; {/* Space between buttons */}
          &nbsp; {/* Space between buttons */}
          &nbsp; {/* Space between buttons */}
          &nbsp; {/* Space between buttons */}
          &nbsp; {/* Space between buttons */}
          &nbsp; {/* Space between buttons */}
        </div>
      </React.Fragment>
    );
  }
}

function Nav(){
  return(
    <div className='navigator'>
      <nav className='nav' >
        <div className='buttons'>
          <Link to="/" id='homebutton'>HG FLOW </Link>
          <Link to="/login" id='loginbutton'> LOG IN </Link>
          <Link to="/community" id='communitybutton'> Community </Link>
        </div>
      </nav>
    </div>
  );
}


function Sidebari(){
  return(
    <aside className="c-side-bar">
        <ul>

          <li>
            {/*
            /* Font Awesome 아이콘 클래스를 사용하려면 라이브러리를 추가해야 함 */
            /* <a href="#"><i class="fa-solid fa-cat"></i> menu1</a> 
            <a href="#">
              <i className="fa-solid fa-cat"></i> menu1
        </a>*/}

            <a href="#">광나루한강공원</a>
          </li>
          <li>
            <a href="#">강서한강공원</a>
          </li>
          <li>
            <a href="#">난지한강공원</a>
          </li>
          <li>
            <a href="#">뚝섬한강공원</a>
          </li>
          <li>
            <a href="#">망원한강공원</a>
          </li>
          <li>
            <a href="#">반포한강공원</a>
          </li>
          <li>
            <a href="#">양화한강공원</a>
          </li>
          <li>
            <a href="#">여의도한강공원</a>
          </li>
          <li>
            <a href="#">이촌한강공원</a>
          </li>
          <li>
            <a href="#">잠실한강공원</a>
          </li>
          <li>
            <a href="#">잠원한강공원</a>
          </li>
          
        </ul>
      </aside>

  );
}

{/*이미 게시되어있는 comment 박스를 출력 */}
function GrayCircleWithBox({ num }) {
  num = 8;
  function rowComment() {
    return (
      <>
        <tr style={{ borderTop: '1px solid black' }}>
          <td>
            <div className="GrayCircle"></div>
          </td>
          <td>
            <div className="GrayBox">
              {/* Add the image here */}
            </div>
          </td>
          <td style={{ display: 'inline-table', justifyContent: 'flex-end' }}>
            <LikeButton></LikeButton>
          </td>
        </tr>
        <tr>
         
          <td></td>
          <td style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button type="button" className="btn btn-outline-dark" style={{ margin: '4px', marginTop: '0px' }}>
              수정
            </button>
            <button type="button" className="btn btn-outline-danger"  style={{ margin: '4px', marginTop: '4px' }}>
              삭제
            </button>
         
          </td>
        </tr>
      </>
    );
  }

  return (
    <div className="GrayCircleWrapper">
      <table>
        <tbody>
          {/* 글 작성하는 comment 박스 */}
          <tr style={{ borderBottom: '1px solid black' }}>
            <td>
              <div className="GrayCircle"></div>
            </td>
            <td>
              <div className="GrayBox"></div>
            </td>
            <td>

              <button type="button" className="btn btn-outline-dark" style={{ margin: '4px', marginTop: '4px' }}>POST</button>
              <button type="button" class="btn btn-secondary" disabled style={{ margin: '4px', marginTop: '4px' }}>Login</button>
            </td>
          </tr>

          {/* rowComment 함수를 num 수에 맞게 반복 출력 */}
          {Array.from({ length: num }).map((_, index) => (
            <React.Fragment key={index}>{rowComment()}</React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CmApp(){
    return(
    <div className="c-main-container">
      <Nav></Nav>
      <div className="c-content-container">
        <Sidebari></Sidebari>
      <GrayCircleWithBox></GrayCircleWithBox>
      </div>
    </div>
    );
}
export default CmApp;
