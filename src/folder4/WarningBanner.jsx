// folder4/WarningBanner.jsx

import React from "react";

/*
컴포넌트 렌더링 막기
- 리액트에서 렌더링을 하고 싶지 않을 경우 null 을 사용
*/
function WarningBanner({warning}) {
  // warning 이 false 일때 if 문 실행됨
  if (!warning) {
    return null;
  }

  return <div>경고!!</div>
}

export default WarningBanner;