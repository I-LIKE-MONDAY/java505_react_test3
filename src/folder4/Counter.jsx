// folder4/Counter.jsx

import React from "react";



function Counter(props) {
  const count = 0;

  return (
    <div>
      {
        // 0 은 false 이니까 0일때는 아래 코드는 count 까지만 실행됨( 실행 아예 안되는것 아님!! )
        count && <h1>현재 카운트 : {count}</h1>
      }
    </div>
  );
}

export default Counter;