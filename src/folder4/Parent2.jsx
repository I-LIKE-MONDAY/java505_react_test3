// folder4/Parent2.jsx

import React, {useState} from "react";
import Child from "./Child";
import Child2 from "./Child2";

function Parent2(props) {
  // childData 를 state 로 설정
  const [childData, setChildData] = useState('');


  return (
    <div>
      <h1>Parent2 컴포넌트 영역</h1>
      {/* 자식 컴포넌트 호출 */}
      {/* 자식 컴포넌트 호출 시 value, childValue 라는 키에 데이터를 저장하여 전달 */}
      {/* childValue 키에 setState() 함수를 저장해서 전달 */}
      <Child2 value={"부모 데이터"} childValue={setChildData}/>

      {/* 현재 state 중 childData 변수를 화면에 출력 */}
      <h3>Child2 컴포넌트에서 전달받은 데이터 : {childData}</h3>

    </div>
  );
}

export default Parent2;
