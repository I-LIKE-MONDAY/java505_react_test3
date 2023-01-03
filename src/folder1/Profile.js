// folder1/Profile.jsx

import React from "react";

// function Profile({userId, userName, userTel, userEmail}) {...} 로도 사용 가능(확장표현식)
// 확장표현식 : 대입 연산자 오른쪽의 데이터를 연산자 왼쪽의 변수에 저장 시 () {} 에 표시된 이름에 대입
function Profile(props) {
  let data = props;
  let userTel = props.userTel;
  let userEmail = props.userEmail;

  return (
    <div className={"border rounded-2 px-3 m-4"}>
      <div className={"my-3"}>
        <label for={"user-id"} className={"form-label"}>아이디 : </label>
        <input type={"text"} id={"user-id"} className={"form-control"} value={data.userId}/>
      </div>
      <div className={"my-3"}>
        <label for={"user-name"} className={"form-label"}>이름 : </label>
        <input type={"text"} id={"user-name"} className={"form-control"} value={data.userName}/>
      </div>
      <div className={"my-3"}>
        <label for={"user-tel"} className={"form-label"}>전화번호 : </label>
        <input type={"tel"} id={"user-tel"} className={"form-control"} value={userTel}/>
      </div>
      <div className={"my-3"}>
        <label for={"user-email"} className={"form-label"}>이메일 : </label>
        <input type={"email"} id={"user-email"} className={"form-control"} value={userEmail}/>
      </div>
    </div>
  );
}

export default Profile;