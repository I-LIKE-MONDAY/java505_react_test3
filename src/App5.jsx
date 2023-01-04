// App5.jsx

import React from "react";
import NotificationList from "./folder3/NotificationList";
import CountButton from "./folder3/CountButton";
import CountButton2 from "./folder3/CountButton2";
import Accommodate from "./folder3/Accommodate";
import Calculator from "./folder3/Calculator";
import Events from "./folder3/Events";
import ConfirmButton from "./folder3/ConfirmButton";

function App5() {
  return (
    <div className={"container"}>
      <NotificationList/>
      <CountButton/>
      <CountButton2/>
      <Accommodate/>
      <Calculator/>
      <br/>
      <Events/>
      <br/>
      <ConfirmButton/>
    </div>
  );
}

export default App5;