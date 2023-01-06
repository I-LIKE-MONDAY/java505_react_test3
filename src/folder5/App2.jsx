// folder5/App2.jsx

import React from "react";
import button from "bootstrap/js/src/button";

// 컨텍스트 객체 생성
const ThemeContext = React.createContext('light');

function Toolbar2 (props) {
  return (
    <ThemeContext.Consumer>
      {value => <ThemedButton2 aaa={value} />}
    </ThemeContext.Consumer>
    // {/*<div>*/}
    // {/*  <ThemedButton2 />*/}
    // {/*</div>*/}

  );
}

function ThemedButton2(props) {
  return (
    <ThemeContext.Consumer>
      {value => <Button2 theme={value} />}
    </ThemeContext.Consumer>
  );
}


function Button2(props) {
  return (
    <button>{props.theme}</button>
  );
}

function App2(props) {
  return(
    <ThemeContext.Provider value={'dark'}>
      <Toolbar2 />
    </ThemeContext.Provider>
  );
}

export default App2;