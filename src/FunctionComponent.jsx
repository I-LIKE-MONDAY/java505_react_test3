// FunctionComponent.jsx
/*
  컴포넌트
1. 모든 컴포넌트는 React 를 import 해서 사용함
2. 함수 컴포넌트는 그냥 함수 생성
3. 함수 컴포넌트를 export default 로 설정해줘야 외부에서 사용이 가능함
4. 함수 컴포넌트에서는 return 에서 jsx 문법을 사용함
5. state 변경 및 생명주기에 관련된 함수를 사용하기 위해서 hooks 를 사용함 ( import {useState} from "react"; )
 */

import React, {useState} from "react";

function FunctionComponent(props) {
  return (
    <div>
      <p>함수 컴포넌트 화면</p>
    </div>
  );
}

export default FunctionComponent;