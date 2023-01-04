import React from "react";
import App4Main03Item from "./App4Main03Item";

function App4Main03({foodName, foodDetail}) {
  // let foodName = props.foodName;
  // let foodDetail = props.foodDetail;
  return (
    <div className={"col-sm-6"}>
      <h5 id={"foodName"}><b>{foodName}</b></h5>
      <p id={"foodDetail"}>{foodDetail}</p>
      {/*<App4Main03Item/>*/}
    </div>
  );
}

export default App4Main03;