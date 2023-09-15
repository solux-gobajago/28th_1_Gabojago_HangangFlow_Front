import '../css/community.css';
import React, { useEffect, useState} from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {HeartOutlined, HeartFilled} from '@ant-design/icons';
import '../css/style.css'

class LikeButton extends React.Component {
  state = {
    isChecked: false,
    notice: '',
  };

  onClick = () => {
    // 좋아요 추가 요청 보내기
    const communityparkUuid = '555ca719-4103-4471-9d5f-217b7993b27a'; // 실제 커뮤니티 parkUuid로 대체해야 함
    const userparkUuid = '6025af4f-8944-4fa0-b2ca-683dad3e6118'; // 실제 사용자 parkUuid로 대체해야 함
    const { isChecked } = this.state;

    // 버튼을 누를때마다
    if (isChecked) {
      this.setState({
        isChecked: false,
        notice: '',
      });
    } else {
      this.setState({
        isChecked: true,
        notice: '1',
      });

      const likesData = {
        userparkUuid: userparkUuid,
        communityparkUuid: communityparkUuid
      };
      axios.post(`http://localhost:3002/api/likes/${communityparkUuid}`, likesData)

      axios.post(`http://localhost:3002/api/likes/${communityparkUuid}`, likesData)
        .then(response => {
          console.log('Likes added successfully:', response.data);
          // 성공적으로 추가되었을 때의 처리
        })
        .catch(error => {
          console.error('Error adding likes:', error);
          // 에러 발생 시의 처리
        });
      // // 좋아요 버튼이 눌렸을 때, 서버로 데이터를 전송
      // axios.post('http://localhost:3001/api/likes/:communityparkUuid', { postId: 'your_post_id' }) // 적절한 엔드포인트와 데이터를 사용해야 합니다.
      //   .then(response => {
      //     console.log('Liked successfully:', response.data);
      //   })
      //   .catch(error => {
      //     console.error('Error while liking:', error);
      //   });
    }
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
    { name: '전체'},
    { name: '광나루한강공원', parkUuid: '5f007f0f-2f64-11ee-804e-0aa821bd4f9c' },
    { name: '강서한강공원', parkUuid: '5f00e757-2f64-11ee-804e-0aa821bd4f9c' },
    { name: '난지한강공원', parkUuid: '5f00e727-2f64-11ee-804e-0aa821bd4f9c' },
    { name: '뚝섬한강공원', parkUuid: '5f00e586-2f64-11ee-804e-0aa821bd4f9c' },
    { name: '망원한강공원', parkUuid: '5f00e6b6-2f64-11ee-804e-0aa821bd4f9c' },
    { name: '반포한강공원', parkUuid: '5f00e637-2f64-11ee-804e-0aa821bd4f9c' },
    { name:  '양화한강공원', parkUuid: '5f00e787-2f64-11ee-804e-0aa821bd4f9c' },
    { name: '여의도한강공원', parkUuid: '5f00e6ea-2f64-11ee-804e-0aa821bd4f9c' },
    { name: '이촌한강공원', parkUuid: '5f00e604-2f64-11ee-804e-0aa821bd4f9c' },
    { name: '잠실한강공원', parkUuid: '5f00e3f5-2f64-11ee-804e-0aa821bd4f9c' },
    { name:  '잠원한강공원', parkUuid: '5f00e5cc-2f64-11ee-804e-0aa821bd4f9c' }
  ];

  return (
    <aside className="c-side-bar">
      <ul>
        {hanriverParks.map((park, index) => (
          <li key={index}>
            <a href="#" onClick={() =>onSelectCategory(park.parkUuid)}>{park.name}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

{/*이미 게시되어있는 comment 박스를 출력 */}
function GrayCircleWithBox({ num }) {
  const [comments, setComments] = useState([]);
  num = 8;
  const fetchComments = async () => {
    try {
      //const comment_response = await axios.get(`/api/getComments?category=${encodeURIComponent(selectedCategory)}`);
      const comment_response = await axios.get(`http://localhost:3001/api/community/article`)
      .then(comment_response => {
        console.log('게시글 get successfully:', comment_response.data);
        // 성공적으로 추가되었을 때의 처리
      })
      .catch(error => {
        console.error('Error get 게시글:', error);
        // 에러 발생 시의 처리
      });

      setComments(comment_response.data);
    } catch (error) {
      console.error('게시글 가져오기 실패:', error);
    }
  };
 
function PostForm() {
  const [selectedParkUuid, setSelectedParkUuid] = useState(null);

  const handleSelectCategory = (parkUuid) => {
    setSelectedParkUuid(parkUuid);
  };
  // 게시글과 관련된 상태 변수 설정
  const [postContent, setPostContent] = useState('');
  
  // 게시글을 서버로 전송하는 함수
  const submitPost = async () => {
    try {
      // 백엔드 서버의 엔드포인트 URL을 여기에 입력하세요
      const apiUrl = `/community/${selectedParkUuid}/article/create`; // 백엔드 엔드포인트 예시

      // 게시글 데이터를 객체로 만들기
      const postData = {
        userUuid: userUuid, // 유저 parkUuid
        parkUuid:parkUuid, // 공원 parkUuid
        content: postContent,
        // 다른 필요한 데이터도 추가할 수 있습니다.
      };

      // Axios를 사용하여 POST 요청 보내기
      const content_response = await axios.post(apiUrl, postData);

      // 서버 응답 확인
      if (content_response.status === 200) {
        // 성공적으로 게시글이 전송되었을 때 처리할 코드 작성
        console.log('게시글이 성공적으로 전송되었습니다.');
        // 예: 게시글 입력 필드 초기화
        setPostContent('');
      } else {
        // 오류 처리
        console.error('게시글 전송 실패:', content_response);
      }
    } catch (error) {
      console.error('게시글 전송 오류:', error);
    }
  };
}
  function rowComment() {
    // const [contents, setContents] = useState([]);
    return (
      <>
        <tr style={{ borderTop: '1px solid black' }}>
          <td>
            <div className="GrayCircle"></div>
          </td>
          <td>
            <div className="GrayBox">
            <textarea
              placeholder="게시글 내용을 입력하세요"
              value={postContent}
              cols="100px"
              rows="780px"
              onChange={(e) => setPostContent(e.target.value)}
              disabled
            />        
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
              <div className="GrayBox">
              <textarea className="Textarea"
              name="contents"
              cols="100px"
              rows="780px"
              value={"글 작성해볼까나~"}
              disabled
            ></textarea> 
            </div>
            </td>
            <td>

              <button type="button" onClick={submitPost} className="btn btn-outline-dark" style={{ margin: '4px', marginTop: '4px' }}>POST</button>
              <button type="button" className="btn btn-secondary" disabled style={{ margin: '4px', marginTop: '4px' }}>Login</button>
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
  function BackGround() {
      const [backgroundImageClass, setBackgroundImageClass] = useState('');
    
      useEffect(() => {
        const getCurrentTime = () => {  //실시간 시간을 받아옴
          const now = new Date();
          const hours = now.getHours();
    
          let imageClass = '';
    
          if (hours >= 0 && hours < 6) {
            imageClass = 'night';               //밤
          } else if (hours >= 6 && hours < 12) {
            imageClass = 'morning';               //아침
          } else if (hours >= 12 && hours < 18) {
            imageClass = 'afternoon';     //낮
          } else {
            imageClass = 'evening';         //저녁
          }
    
          setBackgroundImageClass(imageClass);
        };
    
        // 처음에 한 번 호출하고, 1초마다 업데이트
        getCurrentTime();
        const intervalId = setInterval(getCurrentTime, 1000);
    
        // 컴포넌트가 언마운트될 때 인터벌 해제
        return () => clearInterval(intervalId);
      }, []); // 빈 배열 대신 빈 배열로 설정
      
    return (
      <div className={`background ${backgroundImageClass}`}>         
        {/* 받아온 배경 이미지를 반환 */}
      </div>
    );
    }
    return(
    <div className="c-main-container">
      <BackGround></BackGround>
      <Nav></Nav>
      <div className="c-content-container">
      <Sidebari onSelectCategory={handleSelectCategory}/>
      <GrayCircleWithBox num={8} selectedCategory={handleSelectCategory} />
      </div>
    </div>
    );
}
export default CmApp;
