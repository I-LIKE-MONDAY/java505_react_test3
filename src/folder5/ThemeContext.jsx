// folder5/ThemeContext.jsx

import React from "react";

// 컨텍스트 객체 생성, 기본값으로 'light' 를 설정
const ThemeContext = React.createContext('light');
// 컨텍스트 이름 설정
ThemeContext.displayName = 'ThemeContext';

// 컨텍스트 객체를 외부에서 사용할 수 있도록 export
export default ThemeContext;