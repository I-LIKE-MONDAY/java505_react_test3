// folder4/LoginControl.jsx

import React, {useState} from "react";
import button from "bootstrap/js/src/button";
import Greeting from "./Greeting";
import UserStatus from "./UserStatus";


function LoginButton(props) {
  return (
    <button onClick={props.onClick} type={"button"} className={"btn btn-info"}>로그인</button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick} type={"button"} className={"btn btn-danger"}>로그아웃</button>
  );
}


function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  }

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  }

  // 엘리먼트 변수 : 자바스크립트 변수에 리액트 컴포넌트를 저장한 것
  // 조건부 렌더링을 사용하기 위해서 자바스크립트 변수 button 에 리액트 컴포넌트를 저장
  let button;

  // state 의 상태에 따라서 엘리먼트 변수에 저장될 리액트 컴포넌트를 변경
  if (isLoggedIn) {
    button = <LoginButton onClick={handleLogoutClick}/>
  }
  else {
    button = <LogoutButton onClick={handleLoginClick}/>
  }

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn}/>
      {/* 엘리먼트 변수에 저장된 리액트 컴포넌트가 출력됨 */}
      {/*{button}*/}

      {/* 삼항 연산자 */}
      {
        isLoggedIn ? <LogoutButton onClick={handleLogoutClick}/> : <LoginButton onClick={handleLoginClick}/>
      }
      <UserStatus isLoggedIn={isLoggedIn}/>
    </div>
  );
}

export default LoginControl;