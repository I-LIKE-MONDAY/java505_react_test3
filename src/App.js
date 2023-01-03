import logo from './logo.svg';
import './App.css';
import Button from "react-bootstrap/Button";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";



/*
JSX : 자바스크립트 + html/xml, 하나의 파일에 자바스크립트와 html 을 동시에 작성
컴포넌트 : 리액트를 구성하는 최소 UI 단위, 데이터(props)를 입력받아 view(state)상태에 따라 화면을 출력하는 함수,
           컴포넌트의 이름은 항상 대문자로 시작 (리액트는 소문자로 시작하는 컴포넌트를 html 태그로 인식함 -> html 태그는 <button>, 리액트 컴포넌트는 <Button>)
           UI 를 재사용 가능한 개별적인 여러 조각으로 나누어서 화면 구현
  ㄴ 함수형 컴포넌트 : 현재 많이 사용되는 방식, 사용이 간편함 (클래스형 컴포넌트의 기능을 100% 대체할 수 있음), 자바스크립트 함수를 작성하는 방식
  ㄴ 클래스형 컴포넌트 : 기존에 많이 사용되던 방식, React.Component 를 상속받아 구현함, 컴포넌트 구성요소, 리액트 생명주기를 모두 포함하고 있음
props : 컴포넌트간의 데이터를 주고 받기 위한 JS 객체, properties 의 줄임말, 읽기 전용, 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달 시 주로 사용
state : 현재 컴포넌트의 상태를 표시하는 객체, setState() 를 통해서 데이터를 수정, 데이터 수정 시 화면에 재렌더링됨
hooks : 리액트 16.8버전에서 추가된 기능, 상태 변경 및 리액트 생명주기에 관련된 함수를 사용할 수 있게 해주는 기능,
        리액트 hooks 를 사용하면 클래스 컴포넌트를 사용할 필요가 없음
컨텍스트 : 데이터 전달 객체, 컴포넌트 간의 데이터 전달 시 props 를 사용하면 순차적으로 데이터를 전달함, 컨텍스트는 위치에 상관없이 데이터를 바로 전달할 수 있음
           전체 화면 내부에 메인화면이 있고 그 내부에 작은화면 A, B 로 나눠진다면 전체에서 B로 데이터를 바로 전달하는것이 불가능함
           전체에서 메인으로 보내고, 메인에서 B로 보내야 함(순차적으로)
           이것이 간단한 화면에서는 문제가 되지 않지만 화면이 복잡해지면 계속해서 함수를 만들어줘야함(사용하지 않는 화면(ex: main) 에서도)
           이것을 쉽게 해주는것이 컨텍스트이다. 전체에서 컨텍스트로 -> 컨텍스트에서 바로 B로
react-router : 각 페이지의 경로를 구성하는 라이브러리.
               리액트는 싱글 페이지이기 때문에 화면이 하나밖에 없음. 내부 컨텐츠만 바뀌면서 움직일 뿐. = 리액트 라우터
               클릭을 하면 다른 페이지가 열린것처럼 보이지만 사실은 내부에서 컨텐츠가 움직이고 사라지고 보이게 된 것

*/

/*
JSX 문법
  1. 반드시 1개의 부모 요소가 다른 요소를 감싸는 형태로 구성해야 함(부모 요소가 하나이기만 하면 <div>가 아니라 <p> 태그도 부모요소가 될 수 있음
  2. 자바스크립트 표현식 사용 가능
      {} 안에 자바스크립트를 사용할 수 있음
      if 문은 표현식이 아니기 때문에 JSX 에서 사용할 수 없음 (대신에 삼항연산자를 사용해야 함)
  3. html 속성을 카멜 명명법으로 사용
      font-size -> fontSize 로 사용함
      class -> className 으로 사용
  4. JSX 문법은 html 태그 사용 시, 반드시 시작 태그와 끝 태그를 모두 입력해야 함
      축약 형식으로 시작 태그 끝에 / 를 사용하는 방식도 상관없음
*/

function App() {
  let num1 = 10;
  const flag = false;
  let result;

  // {} 표현식 내에서 자바스크립트의 if 문을 사용할 수 없으므로 외부에서 미리 계산
  if (flag) {
    result = <div>결과가 true</div>
  } else {
    result = <div>결과가  false</div>
  }
  return (
    <div className="App">
      <button type={"button"}>기본 버튼</button>
      <button type={"button"} className={"btn btn-primary"}>부트스트랩 적용 버튼</button>
      <Button type={"button"} variant={"success"}>react용 부트스트랩 적용 버튼</Button>

      <p>{num1 + 10}</p>
      <br/><hr/>
      {/* if 쓰면 바로 에러남! 사용하고 싶으면 삼항연산자 사용하기*/}
      {/*{if (flag) {*/}
      {/*  */}
      {/*}}*/}
      {/* if 문 사용할 수 없어서 삼항연산자 사용함*/}
      <div>{flag === true ? 100 : 10}</div>
      <div>{result}</div>

      <br/><hr/><br/>
      <ClassComponent/>
      <FunctionComponent/>


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


    </div>
  );
}

export default App;
