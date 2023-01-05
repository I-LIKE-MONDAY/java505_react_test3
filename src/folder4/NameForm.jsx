// folder4/NameForm.jsx

import React, {useState} from "react";

function NameForm(props) {
   const [value, setValue] = useState('');

   // 이벤트 발생 시 동작하는 함수
   // 매개변수로 자바스크립트의 event 객체를 가져옴
   // 이벤트가 발생된 태그의 정보가 들어있음
   const handleChange = (event) => {
     // state 로 설정된 변수 value 의 값을 변경하는 setValue() 함수 실행
     // event 객체를 통해서 이벤트가 발생한 대상에 대한 정보를 가져옴
     // 이벤트 발생 대상이 가지고 있는 value 값을 사용하여 state 를 변경
     setValue(event.target.value);
   }

   const handleSubmit = (event) => {
     alert("입력한 이름 : " + value);
     event.preventDefault();
   }

   return (
     <form onSubmit={handleSubmit} className={"container"}>
       <div className={"my-3"}>
         <label htmlFor="user-name" className={"form-label"}>이름 : </label>
         {/* input 태그의 value 를 state 로 설정된 변수를 사용하여 화면에 데이터를 출력 */}
         {/* 사용자 입력에 의해서 값이 변경될 경우 이벤트 발생(onChange) => handleChange 함수 동작 */}
         <input type={"text"} className={"form-control"} value={value} onChange={handleChange}/>
       </div>
       <div className={"my-3"}>
         <button type={"submit"} className={"btn btn-primary"}>제출</button>
       </div>
     </form>
   );
}

export default NameForm;