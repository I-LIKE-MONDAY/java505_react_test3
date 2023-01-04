// folder3/UseCounter.jsx : 커스텀 훅


import React, {useState} from "react";

// 커스텀 훅
// 이름에 use 를 접두사로 사용
// 매개변수, 반환값을 사용자 마음대로 설정
// 내부에서 훅을 사용한 함수이며, 소스코드 재활용을 위해서 사용함
// props 가 아닌 initValue 인 이유 : 커스텀 훅이라서

// 커스텀 훅으로 설정
// 매개변수를 마음대로 설정함
function UseCounter(initValue) {

  // state 사용을 위해서 useState 설정을 걸어줌
  const [count, setCount] = useState(initValue);

  // 함수 실행 시 state 를 수정하기 위함 setCount 를 실행
  const increaseCount = () => {
    // 자바스크립트에서 지원하는 수학 클래스의 max 함수를 사용하여 0 이하의 값을 사용할 수 없도록 제약을 걸어놓음
    setCount((count) => {return count + 1});
  }

  const decreaseCount = () => {
    setCount((count) => Math.max(count - 1, 0));
  }
  // math 사용한 코드와 동일
  // setCount((count) => {
  //   count--;
  //   if (count < 0) {
  //     count = 0;
  //   }
  //   return count;
  // });
  return[count, increaseCount, decreaseCount];
}

export default UseCounter;
