// folder/BoardList.jsx

import React from "react";
import BoardItem from "./BoardItem";

const boardItemList = [
  {boardIdx: 100, boardTitle: "게시판 100번 글 제목", boardUserId: "test1", boardCreateDate: "2023-01-03 12:40:40"},
  {boardIdx: 101, boardTitle: "게시판 101번 글 제목", boardUserId: "test2", boardCreateDate: "2023-01-03 12:41:40"},
  {boardIdx: 102, boardTitle: "게시판 102번 글 제목", boardUserId: "test3", boardCreateDate: "2023-01-03 12:42:40"},
]


function BoardList() {
  // boardItemList.map((item) => {
  //   return <BoardItem idx={item.boardIdx} title={item.boardTitle} userId={item.boardUserId} createDt={item.boardCreateDate}/>
  // });
  return (
    <div className={"container mx-auto"}>
      <table className={"table table-hover table-striped"}>
        <thead>
          <tr>
            <th>글 번호</th>
            <th>글 제목</th>
            <th>사용자</th>
            <th>등록 시간</th>
          </tr>
        </thead>
        <tbody>
          {/* ----------------------- 아래 코드 주석 -> 위 코드로 바꿔서 줄일 수 있음! ----------------------- */}
          {/*<BoardItem idx={"100"} title={"테스트 제목100"} userId={"test1"} createDt={"2023-01-03 12:50:00"}/>*/}
          {/*<BoardItem idx={"101"} title={"테스트 제목101"} userId={"test2"} createDt={"2023-01-04 12:50:00"}/>*/}
          {/*<BoardItem idx={"102"} title={"테스트 제목102"} userId={"test3"} createDt={"2023-01-05 12:50:00"}/>*/}

          {boardItemList.map(
            (item) => {
              return <BoardItem idx={item.boardIdx} title={item.boardTitle} userId={item.boardUserId} createDt={item.boardCreateDate}/>
            })}
        </tbody>
      </table>
      <BoardItem/>
    </div>
  );
}

export default BoardList;