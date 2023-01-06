// folder5/MainContent.jsx

import React, {useContext} from "react";
// 파일로 생성된 컨텍스트를 import 하여 사용, 여러 컴포넌트에서 활용이 가능함
import ThemeContext from "./ThemeContext";

function MainContent(props) {
  // useContext() 훅을 사용하여 <Context.consumer> 없이 컨텍스트에 저장된 정보를 사용함
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div style={{
      width: "100vw",
      height: "100hw",
      padding: "1.5rem",
      backgroundColor: theme === "light" ? "white" : "black",
      color: theme === "light" ? "black" :"white"}}
    >
      <p>테마 변경이 가능한 웹사이트</p>
      {/* button 태그의 클릭 이벤트에 컨텍스트를 통해 가져온 함수를 설정함 */}
      <button onClick={toggleTheme}>테마 변경</button>
    </div>
  );
}

export default MainContent;