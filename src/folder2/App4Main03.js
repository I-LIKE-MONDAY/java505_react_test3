import React from "react";

function App4Main03({foodName, foodDetail}) {
  // let foodName = props.foodName;
  // let foodDetail = props.foodDetail;
  return (
    <div className={"col-sm-6"}>
      <p id={"foodName"}>{foodName}</p>
      <p id={"foodDetail"}>{foodDetail}</p>
    </div>
  );
}

export default App4Main03;