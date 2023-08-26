import './community.css';

import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
          <Link to="/mypage" id='mypagebutton'> MY PAGE </Link>
        </div>
      </nav>
    </div>
  );
}


function Sidebari({ onSelectCategory }) {
  const hanriverParks = [
    '광나루한강공원', '강서한강공원', '난지한강공원', '뚝섬한강공원',
    '망원한강공원', '반포한강공원', '양화한강공원', '여의도한강공원',
    '이촌한강공원', '잠실한강공원', '잠원한강공원'
  ];

  return (
    <aside className="c-side-bar">
      <ul>
        {hanriverParks.map((park, index) => (
          <li key={index}>
            <a href="#" onClick={() => onSelectCategory(park)}>{park}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

{/*이미 게시되어있는 comment 박스를 출력 */}
function GrayCircleWithBox({ num, selectedCategory }) {
  const [comments, setComments] = useState([]);
  num = 8;
  const fetchComments = async () => {
    try {
      const response = await axios.get(`/api/getComments?category=${encodeURIComponent(selectedCategory)}`);
      setComments(response.data);
    } catch (error) {
      console.error('댓글 가져오기 실패:', error);
    }
  };
 
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

function CmApp() {
  const [selectedCategory, setSelectedCategory] = useState('');

    return(
    <div className="c-main-container">
      <Nav></Nav>
      <div className="c-content-container">
      <Sidebari onSelectCategory={setSelectedCategory} />
      <GrayCircleWithBox num={8} selectedCategory={selectedCategory} />
      </div>
    </div>
    );
}
export default CmApp;
