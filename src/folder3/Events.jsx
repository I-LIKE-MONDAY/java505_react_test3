//folder3/Events.jsx

/*
리액트는 html 과 같은 이벤트를 가지고 있음
카멜명명법을 사용하므로 onclick="sum()" => onClick={sum} 으로 변경되어 사용
매개변수 전달 시 이벤트 부분에 화살표 콜백함수를 사용
  onClick={() => sum(10)}
이벤트 사용 시 이벤트 핸들러도 매개변수로 전달이 가능함
  onClick={(event) => sum(10, event)}
*/
import React from "react";

function Events() {

  // 기본 함수를 클릭이벤트와 연동
  const click1 = () => alert("일반 클릭 이벤트");

  // 매개변수가 있는 함수를 클릭이벤트와 연동
  const click2 = (item) => alert(`매개변수 값 : ${item}, \n매개변수가 있는 이벤트`);

  // 매개변수로 이벤트 핸들러(= 이벤트 객체)를 사용하는 함수를 클릭이벤트아 연동
  const click3 = (item, event) => {
    alert(`매개변수와 event 객체가 있는 클릭 이벤트
매개변수 값 : ${item}, 이벤트 객체 : ${event.type}`);
  }


  return (
    <div>
      <button type={"button"} className={"btn btn-primary"} onClick={click1}>일반 클릭 이벤트</button>
      <button type={"button"} className={"btn btn-success"} onClick={() => click2(100)}>매개변수가 있는 클릭 이벤트</button>
      <button type={"button"} className={"btn btn-info"} onClick={(event) => click3(200,event)}>event 객체가 있는 클릭 이벤트</button>
    </div>
  );
}

export default Events;
