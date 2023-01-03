// folder1/ProfileList.jsx

import React from "react";
import Profile from "./Profile";

/*
props : 자바스크립트 컴포넌트 간의 데이터 전달을 위해서 사용하는 자바스크립트 객체, 읽기 전용
        부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달 시 사용
        부모 컴포넌트에서 자식 컴포넌트를 호출하여 사용 시 속성을 사용하여 데이터를 전달
        부모 컴포넌트에서 사용한 속성명이 자식 컴포넌트의 props 객체에 담겨서 전달이 됨
        해당 속성명을 자식 컴포넌트에서 그대로 사용함
*/

function ProfileList() {
  return (
    <div className={"row"}>
      <div className={"col-sm-6 mx-auto"}>
        <Profile userId={"test1"} userName={"테스터1"} userTel={"01012345678"} userEmail={"test1@bitc.co.kr"}/>
        <Profile userId={"test2"} userName={"테스터2"} userTel={"01098765432"} userEmail={"test2@bitc.co.kr"}/>
      </div>
    </div>
  );
}

export default ProfileList;