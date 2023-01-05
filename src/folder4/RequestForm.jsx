// folder/RequestForm.jsx

import React, {useState} from "react";

function RequestForm(props) {
  const [value, setValue] = useState('요청 사항을 입력하세요');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    alert("입력한 요청사항 : " + value);
    // 이벤트 처리 안해주려고 붙이는 것
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className={"container"}>
      <div className={"my-3"}>
        <label htmlFor="user-contents" className={"form-label"}>요청사항 : </label>
        <textarea value={value} onChange={handleChange} className={"form-control"}></textarea>
      </div>
      <div className={"my-3"}>
        <button type={"submit"} className={"btn btn-primary"}>제출</button>
      </div>
    </form>
  );

}

export default RequestForm;