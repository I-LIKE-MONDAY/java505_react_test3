// folder4/Reservation.jsx

import React, {useState} from "react";

function Reservation(props) {
  const [haveBreakfast, setHaveBreakfast] = useState(true);
  const [numberOfGuest, setNumberOfGuest] = useState(2);

  const handleSubmit = (e) => {
    alert(`아침식사 여부 : ${haveBreakfast}, 방문객 수 : ${numberOfGuest}`);
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={"my-3"}>
        <label className={"form-label"}>아침식사 여부 : </label>
        <input type={"checkbox"} checked={haveBreakfast} onChange={(e) => {
          setHaveBreakfast(e.target.checked);
        }}/>
      </div>
      <div className={"my-3"}>
        <label className={"form-label"}>방문객 수 : </label>
        <input type={"number"} value={numberOfGuest} onChange={(e) => {
          setNumberOfGuest(e.target.value);
        }}/>
      </div>
      <div className={"my-3"}>
        <button type={"submit"} className={"btn btn-primary"}>제출</button>
      </div>
    </form>
  );
}

export default Reservation;