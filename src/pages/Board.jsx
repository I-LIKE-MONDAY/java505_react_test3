//Board.jsx
import React from "react";
import {useParams} from "react-router-dom";

function Board(props){
    const boardSelect = useParams();
    return(
        <div>
            <h2>글번호 : {boardSelect.boardIdx}</h2>
        </div>
    )
}

export default Board;