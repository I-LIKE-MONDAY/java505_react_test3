import React from "react";
import App4Footer from "./folder2/App4Footer";
import App4Navigator from "./folder2/App4Navigator";
import App4Main01 from "./folder2/App4Main01";
import App4Main02 from "./folder2/App4Main02";
import App4Main03 from "./folder2/App4Main03";
import App4Contact from "./folder2/App4Contact";
import App4Main03Item from "./folder2/App4Main03Item";

const styles = {
  underline: {
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 1,
  },
};

function App4() {
  return (
    <div>
      <App4Navigator/>
      <main>
        <App4Main01/>
        <App4Main02/>
        <div className={"container"}>
          <div className={"row"}>
            <App4Main03Item/>
          </div>
          <br/><hr/><br/>
        </div>
        <App4Contact/>
      </main>

      <App4Footer/>
    </div>
  );
}

export default App4;