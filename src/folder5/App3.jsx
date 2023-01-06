// folder5/App3.jsx : 컨텍스트 여러개 사용 : Provider 을 겹쳐 쓰면 됨!
// 두개를 겹쳐서 만들고 Consumer도 두개로 겹쳐서 받음 -> 제일 안쪽의 실제로 받는 애한테 props 를 통해서 데이터 넘겨줌

import React from "react";

// 컨텍스트 두개 생성
const ThemeContext = React.createContext('light');
const UserContext = React.createContext({name: "Guest"});

function App3(props) {
  const {theme, signedInUser} = props;
  return (
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={signedInUser}>
        <Layout/>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

function Layout() {
  return (
    <div>

    </div>
  );
}

function ProfilePage(props) {
  return (
    <div></div>
  );
}


function Content() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => (
            <ProfilePage user={user} theme={theme}/>
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}

export default App3;