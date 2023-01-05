import React from "react";
import Goal from "./folder4/Goal";
import Greeting from "./folder4/Greeting";
import LoginControl from "./folder4/LoginControl";
import Counter from "./folder4/Counter";
import MailBox from "./folder4/MailBox";
import MainPage from "./folder4/MainPage";
import LandingPage from "./folder4/LandingPage";
import AttendanceBook from "./folder4/AttendanceBook";
import NameForm from "./folder4/NameForm";
import RequestForm from "./folder4/RequestForm";
import FruitSelect from "./folder4/FruitSelect";
import Reservation from "./folder4/Reservation";
import Parent from "./folder4/Parent";
import Parent2 from "./folder4/Parent2";

function App6() {
    return (
      <div className={"container mt-5"}>
          <Goal isGoal={false}/>
          <hr/>
          {/*<Greeting isLoggedIn={false}/>*/}
          {/*<hr/>*/}
          <LoginControl/>
          <MailBox unreadMessages={10}/>
          <Counter/>
          <hr/>
          <MainPage/>
          <hr/>
          <LandingPage/>
          <hr/>
          <AttendanceBook/>
          <hr/>
          <NameForm/>
          <hr/>
          <RequestForm/>
            <hr/>
            <FruitSelect/>
        <hr/>
        <Reservation/>
        <hr/>
        <Parent/>
        <Parent2/>
      </div>
    );
}

export default App6;