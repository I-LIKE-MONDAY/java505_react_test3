// folder/Calculator.jsx

/*
문제1) 숫자 2개를 입력받아 계산 기호 버튼에 따라서 결과를 출력하는 리액트 컴포넌트를 작성하세요
- input 태그를 통해서 숫자를 입력(태그이름 : num1, num2, result)
- 버튼 5개 ( + - * / = )
  - 컴포넌트 이름 : Calulator.jsx
- useState 총 3개 사용 (함수 컴포넌트로 작성)
*/

import React, {useState} from "react";

let calResult = 0;
function Calculator(props) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const plus = () => {
    const number1 = parseInt(num1);
    const number2 = parseInt(num2);
    calResult = number1 + number2;
  }
  const minus = () => {
    const number1 = parseInt(num1);
    const number2 = parseInt(num2);
    calResult = number1 - number2;
  }
  const multiply = () => {
    const number1 = parseInt(num1);
    const number2 = parseInt(num2);
    calResult = number1 * number2;
  }
  const division = () => {
    const number1 = parseInt(num1);
    const number2 = parseInt(num2);
    calResult = number1 / number2;
  }

  const equal = () => {
    setResult(calResult);
  }
  return (
    <div>
      <hr/>
      <div className={"my-3 text-center"}>
        <span>숫자1 </span><input type="text" value={num1} onChange={(e) => (setNum1(parseInt(e.target.value)))}/>
        <span className={"ms-3"}>숫자2 </span><input type="text" value={num2} onChange={(e) => (setNum2(parseInt(e.target.value)))}/>
      </div>
      <div className={"text-center"}>
        <button onClick={plus} className={"btn btn-info me-5"}> + </button>
        <button onClick={minus} className={"btn btn-info me-5"}> - </button>
        <button onClick={multiply} className={"btn btn-info me-5"}> * </button>
        <button onClick={division} className={"btn btn-info me-5"}> / </button>
        <button onClick={equal} className={"btn btn-success"}> = </button>
      </div>
      <div className={"text-center mt-4"}>
      <span>결과 = </span><input type="text" value={result}/>
      </div>
    </div>
  );
}

export default Calculator;