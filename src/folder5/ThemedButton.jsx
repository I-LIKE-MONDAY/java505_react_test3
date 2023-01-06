// folder5/ThemedButton.jsx

import React from "react";
const styles = {
  bg: {
    background: "white",
  }
}

function Button(props) {
  // 부모에게서 전달받은 theme 를 사용하고 있음
  if (props.theme === "dark") {
    styles.bg.background = 'black';
  }
  else {
    styles.bg.background = 'red';
  }
  return <button style={styles.bg}>테마 적용 버튼</button>
}

function ThemedButton(props) {
  return (
    // 자식 컴포넌트로 theme 를 전달
    <Button theme={props.theme}/>
  );
}

export default ThemedButton;