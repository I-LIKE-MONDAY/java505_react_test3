// folder3/CountButton.jsx : setState() 익히기

import React from "react";
import Button from "react-bootstrap/Button";
import {logDOM} from "@testing-library/react";

class CountButton extends React.Component {
  constructor(props) {
    super(props);

    // state 객체 생성
    this.state = {
      count: 0,
    }

    // 객체 멤버 변수 count 선언
    this.count = this.state.count;
  }

  // 메서드 2개 생성
  countUp = () => {
    console.log("이전 this.count : " + this.count);
    this.count = this.count + 1

    // setState 함수를 실행해야만 state 의 값이 수정이 되고, state 의 값이 수정되면 render 함수가 재실행되면서 화면을 다시 그려줌
    this.setState({
      count: this.count
    });
    console.log("+ 사용 후 this.count : " + this.count);
  };
  countDown = () => {
    console.log("이전 this.count : " + this.count);
    this.count = this.count - 1
    this.setState({
      count: this.count
    });
    console.log("- 사용 후 this.count : " + this.count);
  };


  render() {
    return (
      <div>
        <label htmlFor="" className={"form-label"}>count : <span>{this.count}</span></label><br/>
        <Button variant={"primary"} onClick={this.countUp} > + </Button>
        <Button variant={"danger"} onClick={this.countDown}> - </Button>
      </div>
    );
  }
}

export default CountButton;