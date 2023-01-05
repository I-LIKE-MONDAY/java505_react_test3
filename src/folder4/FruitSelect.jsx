// folder4/FruitSelect.jsx

import React, {useState} from "react";

function FruitSelect() {
  const [value, setValue] = useState('grape');
  const [value2, setValue2] = useState('apple');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  // select box 의 자식 태그인 option 태그를 모두 가져옴
  const handleChange2 = (e) => {
    const options = e.target.options;

    // 선택된 데이터를 저장하기 위한 배열
    let items = [];

    // option 의 크기만큼 반복
    for (let i = 0; i < options.length; i++) {
      // option 태그 중 선택된 태그인지 아닌지 확인
      if (options[i].selected) {
        // 선택된 태그의 내용만 배열에 저장
        items.push(options[i].value);
      }
    }
    // setState() 함수를 통해서 state 를 업데이트
    setValue2(items);
  }

  const handleSubmit = (e) => {
    alert(`선택한 과일 : ${value}, 다중선택 과일 : ${value2}`);
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={"my-3"}>
        <label htmlFor={"sel1"} className={"form-label"}>과일을 선택하세요 : </label>
        {/* select 사용 시 기본값 설정 : value 속성으로 진행 */}
        {/* multiple 속성 사용 시 true/false 사용 */}
        {/* 리액트에서 기본 html 의 속성 중 속성명으로만 효과가 발생하는 속성에 대해서도 값을 제어하기 위해서 속성명={값} 형식으로 사용함 */}
        <select id={"sel1"} className={"form-select"} value={value} onChange={handleChange}>
          <option value={"apple"}>사과</option>
          <option value={"banana"}>바나나</option>
          <option value={"grape"}>포도</option>
          <option value={"watermelon"}>수박</option>
        </select>
        <div className={"my-3"}>
          <label htmlFor={"sel2"} className={"form-label"}>과일을 선택하세요 : </label>
          <select id={"sel2"} className={"form-select"} onChange={handleChange2} value={value2} multiple={true}>
            <option value={"apple"}>사과</option>
            <option value={"banana"}>바나나</option>
            <option value={"grape"}>포도</option>
            <option value={"watermelon"}>수박</option>
          </select>
        </div>
      </div>
      <div className={"my-3"}>
        <button type={"submit"} className={"btn btn-primary"}>제출</button>
      </div>
    </form>
  );

}

export default FruitSelect;