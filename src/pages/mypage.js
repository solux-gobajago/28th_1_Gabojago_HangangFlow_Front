import React from "react";
import { Link } from "react-router-dom";
import '../css/mypage.css';


function Nav() {
    return (
      <div className='navigator'>
        <nav className='nav'>
          <span className='buttons'>
            <Link to="/" id='homebutton'>HG FLOW </Link>
            <Link to="/login" id='loginbutton'> LOG IN </Link>
            <Link to="/community" id='communitybutton'>Community</Link>
            <Link to="/mypage" id='mypagebutton'> MY PAGE </Link>
          </span>
        </nav>
      </div>
    );
  }

function Mypage(){
    return(
        <div className="mypage-container">
            <Nav />
            <div className="mypage-box">
                <div className="myinformation">
                    <div id="myimage"></div>
                    <div>내 정보 
                        이름 아이디
                    </div>
                </div>
                <div className="bookmark">
                    <div>북마크한 목록</div>
                </div>
                <div className="liked">
                    <div>좋아요한 목록</div>
                </div>
            </div>
            


        </div>
    )
}

export default Mypage;