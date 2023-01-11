import React from "react";
import AxiosTest from "./folder6/AxiosTest";
import DailyBoxOffice from "./folder6/DailyBoxOffice";
import AsyncAwait from "./folder6/AsyncAwait";
import AxiosRestServer from "./folder6/AxiosRestServer";

function App8(props) {
    return (
        <div>
            <h1>App8 화면.</h1>
            {/*<AxiosTest/>*/}
            <DailyBoxOffice/>
            <AsyncAwait/>
            <hr/>
            <AxiosRestServer/>
        </div>
    );
}

export default App8;