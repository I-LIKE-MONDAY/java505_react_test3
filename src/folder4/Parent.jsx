// folder4/Parent.jsx

import React from "react";
import Child from "./Child";

function Parent(props) {
  return (
    <div>
      <h1>Parent 컴포넌트 영역</h1>
      <Child value={"부모 데이터1"}/>
    </div>
  );
}

export default Parent;
