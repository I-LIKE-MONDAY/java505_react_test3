// folder4/LandingPage.jsx

import React, {useState} from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {

  // isLoggedIn을 state 로 설정
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // state 값 수정을 위한 함수 생성(변수처럼 생겼지만 함수. 함수로써 동작함)
  const onClickLogin = () => {
    setIsLoggedIn(true);
  }

  const onClickLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div>
      <Toolbar isLoggedIn={isLoggedIn} onClickLogin={onClickLogin} onClickLogout={onClickLogout}/>
      <div style={{padding: 16}}>배너 확인</div>
    </div>
  );
}

export default LandingPage;