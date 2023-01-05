// folder4/Child2.jsx

/*
<데이터 끌어올리기>
예시)
가게에 갔을때 주인, 손님이 있다. 테이블마다 호출벨이 달려있음
버튼을 누르면 주인이 와서 주문서를 들고 돌아감

부모가 원래 사용해야 할 함수(setChildData) 를 자식한테 넘겨주고 (childValue 라는 키에 넣어서)
자식컴포넌트에서 childValue.value 이용하면 실제로는 setChildData 가 동작이 되면서
부모 컴포넌트의 값이 변경되는 원리임.
*/

import React from "react";

// Child2 컴포넌트는 부모 컴포넌트에서 전달받은 2개의 키가 졵함
// props 에 value, childValue 키를 전달받았고, 해당 키에 1:1로 매칭된 데이터가 존재함
// value : "부모 데이터". childValue : setState() 함수가 들어있음

function Child2(props) {

  // 부모 컴포넌트에서 props 를 통해서 전달받은 함수를 실행
  // 전달받은 부모 컴포넌트에서 전달받은 함수가 부모의 state 를 수정할 수 있는 setState() 함수임.
  const sendData = () => {
    props.childValue('자식 데이터');
  }


  return (
    <div>
      <h3>Child2 컴포넌트 영역</h3>
      {/* 부모 컴포넌트에서 props 를 통해서 전달받은 데이터 출력 */}
      <p>부모 컴포넌트에서 전달받은 값 : {props.value}</p>
      {/* 버튼 클릭 시 지정한 함수 실행 */}
      <button onClick={sendData} className={"btn btn-primary"}>클릭시 데이터 전달</button>
    </div>
  );
}

export default Child2;