// folder5/DarkOrLight.jsx

import React, {useCallback, useState} from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

function DarkOrLight(props) {
  // state 로 등록
  const [theme, setTheme] = useState('light');

  // useCallback() : 콜백함수를 반환하는 리액트 훅, 메모이제이션 기능을 가지고 있어 지정한 의존성 배열에 등록된 데이터가 변경되었을 경우에만 동작(리소스를 덜 사용해서 효율적 -> 화면 그리는 속도가 빨라짐)
  const toggleTheme = useCallback(() => {

    // state 로 지정된 theme 값이 변경될 경우에만 동작
    if (theme === 'light') {
      setTheme("dark");
    }
    else if (theme === "dark") {
      setTheme("light");
    }
  }, [theme]);

  return (
    // 컨텍스트 Provider 로 해당 컴포넌트 아래의 자손 컴포넌트에서 지정한 데이터를 사용할 수 있도록 함. 여기서 value= 는 고정된 속성값.
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <MainContent />
    </ThemeContext.Provider>
  );
}

export default DarkOrLight;
