// ClassComponent.jsx
/*
  컴포넌트
1. 모든 컴포넌트는 React 를 import 해서 사용함
2. 클래스 컴포넌트는 React.Component 상속받아 클래스를 생성
3. 클래스 컴포넌트를 export default 로 설정해줘야 외부에서 사용이 가능함
4. 클래스 컴포넌트에는 render() 메소드가 존재함, render() 메소드에서 jsx 문법을 사용함
5. 클래스 컴포넌트는 리액트 생명주기 메소드를 사용할 수 있음
6. 생성자(constructor) 사용가능, 상태 표현을 위한  state 를 설정(없으면 안써도 됨)
 */

import React from "react";

class ClassComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <p>클래스 컴포넌트 화면</p>
      </div>
    );
  }

  componentDidMount() {
    console.log("마운트 후 출력")
  }
}

export default ClassComponent;