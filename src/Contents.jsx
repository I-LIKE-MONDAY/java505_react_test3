// Contents.jsx
import React from "react";
// object 타입
const styles = {
  fakeImg: {
    height: 200,
    backgroundColor: "#aaa",
  },
};

function Contents() {
  return (
    <div>
      <h2>제목 부분</h2>
      <h5>부제목 부분, 2023-01-03</h5>
      <div style={styles.fakeImg}></div>
      <p>점심 먹고 싶다 배고프다</p>
      <p>리액트 수업 듣는 중... 오전 11:14</p>
    </div>
  );
}

export default Contents;