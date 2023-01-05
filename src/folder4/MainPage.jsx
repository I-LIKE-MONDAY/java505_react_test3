// folder4/MainPage.jsx

import React, {useState} from "react";
import WarningBanner from "./WarningBanner";

function MainPage() {
  const [showWarning, setShowWarning] = useState(false);

  const handleToggleClick = () => {
    setShowWarning(prevState => !prevState);
  }

  return (
    <div>
      <WarningBanner warning={showWarning}/>
      <button onClick={handleToggleClick} className={"btn btn-success"}>{showWarning ? '감추기' : '보이기'}</button>
    </div>
  )
}

export default MainPage;