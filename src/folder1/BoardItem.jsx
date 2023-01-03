// folder/BoardItem.jsx

import React from "react";

function BoardItem({idx, title, userId, createDt}) {
  return(
    <tr>
      <td>{idx}</td>
      <td>{title}</td>
      <td>{userId}</td>
      <td>{createDt}</td>
    </tr>
  );
}

export default BoardItem;