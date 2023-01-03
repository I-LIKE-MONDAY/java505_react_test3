// App2.jsx
import React from "react";
import Contents from "./Contents";
import Footer from "./Footer";
import Header from "./Header";
import Navigate from "./Navigate";
import LinkList from "./LinkList";
import Info from "./Info";

// object 타입
const styles = {
  fakeImg: {
    height: 200,
    backgroundColor: "#aaa",
  },
};

function App2() {
  return (
    <div>
      <Header/>
      {/* ------------------- Header.jsx 로 이동 ------------------------*/}
      {/*<div className={"p-5 bg-primary text-white text-center"}>*/}
      {/*  <h1>컴포넌트 연습용 부트스트랩 기본 페이지 만들기 1</h1>*/}
      {/*  <p>반응형 웹이 지원하는 페이지임</p>*/}
      {/*</div>*/}

      <Navigate/>
      {/*------------------- Navigate.jsx 로 이동 ------------------------*/}
      {/*<nav className={"navbar navbar-expand-sm bg-dark navbar-dark"}>*/}
      {/*  <div className={"container-fluid"}>*/}
      {/*    <ul className={"navbar-nav"}>*/}
      {/*      <li className={"nav-item"}>*/}
      {/*        <a className={"nav-link active"} href={"#"}>Active</a>*/}
      {/*      </li>*/}
      {/*      <li className={"nav-item"}>*/}
      {/*        <a className={"nav-link"} href={"#"}>Link</a>*/}
      {/*      </li>*/}
      {/*      <li className={"nav-item"}>*/}
      {/*        <a className={"nav-link"} href={"#"}>Link</a>*/}
      {/*      </li>*/}
      {/*      <li className={"nav-item"}>*/}
      {/*        <a className={"nav-link disabled"} href={"#"}>Disabled</a>*/}
      {/*      </li>*/}
      {/*    </ul>*/}
      {/*  </div>*/}
      {/*</nav>*/}

      <div className={"container mt-5"}>
        <div className={"row"}>
          <div className={"col-sm-4"}>
            <Info/>
            {/* ----------------------- Info.jsx 로 이동 -----------------------*/}
            {/*<h2>About Me</h2>*/}
            {/*<h5>Photo of me:</h5>*/}
            {/*<div style={styles.fakeImg}>Fake Image</div>*/}
            {/*<p>아무 노래나 일단 틀어~~</p>*/}

            <LinkList/>
            {/* ----------------------- LinkList.jsx 로 이동 -----------------------*/}
            {/*<ul className={"nav nav-pills flex-column"}>*/}
            {/*  <li className={"nav-item"}>*/}
            {/*    <a className={"nav-link active"} href="#">Active</a>*/}
            {/*  </li>*/}
            {/*  <li className={"nav-item"}>*/}
            {/*    <a className="nav-link" href={"#"}>Link</a>*/}
            {/*  </li>*/}
            {/*  <li className={"nav-item"}>*/}
            {/*    <a className="nav-link" href={"#"}>Link</a>*/}
            {/*  </li>*/}
            {/*  <li className={"nav-item"}>*/}
            {/*    <a className="nav-link disabled" href={"#"}>Disabled</a>*/}
            {/*  </li>*/}
            {/*</ul>*/}
            <hr className={"d-sm-none"}/>
          </div>
          <div className={"col-sm-8"}>
            <Contents/>
            {/*------------Contents.jsx 로 이동----------------*/}
            {/*<h2>제목 부분</h2>*/}
            {/*<h5>부제목 부분, 2023-01-03</h5>*/}
            {/*<div style={styles.fakeImg}></div>*/}
            {/*<p>점심 먹고 싶다 배고프다</p>*/}
            {/*<p>리액트 수업 듣는 중... 오전 11:14</p>*/}

            <Contents/>
            {/*------------Contents.jsx 로 이동----------------*/}
            {/*<h2>제목 부분</h2>*/}
            {/*<h5>부제목 부분, 2023-01-03</h5>*/}
            {/*<div style={styles.fakeImg}></div>*/}
            {/*<p>점심 먹고 싶다 배고프다</p>*/}
            {/*<p>리액트 수업 듣는 중... 오전 11:14</p>*/}
          </div>
        </div>
      </div>

      <Footer/>
      {/*------------Footer.jsx 로 이동----------------*/}
      {/*<div className={"mt-5 p-4 bg-dark text-white text-center"}>*/}
      {/*  <p>Footer</p>*/}
      {/*</div>*/}
    </div>
  );
}


export default App2;