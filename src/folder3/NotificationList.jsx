// folder3/NotificationList.jsx

import React from "react";
import Notification from "./Notification";

// 서버에서 전송되어야 할 데이터, 통신 모듈이 없기 때문에 임의로 만들어준 데이터
const msgData = [
  {id: 1, message: "안녕하세요. 오늘 일정입니다."},
  {id: 2, message: "점심 식사 시간입니다."},
  {id: 3, message: "이제 곧 미팅이 시작됩니다."},
];

// 자바스크립트 타이머 객체 정보를 저장할 변수
let timer;

// 클래스 컴포넌트 사용
class NotificationList extends React.Component {

  // 클래스 컴포넌트의 생성자
  constructor(props) {
    super(props);

    // state 객체 선언, 클래스(객체)의 멤버 변수로 선언
    this.state = {
      // 메시지를 저장할 배열
      notification: [],
    };
  }

  // 컴포넌트가 마운트된 후 실행되는 생명주기 함수
  componentDidMount() {
    // object 타입을 사용한 확장표현식. 현재는 비어있음. 타이머가 돌면서 값 들어갈 예정
    const { notification } = this.state;

    // 타이머를 사용하여 지정된 시간을 간격으로 반복 실행 (1000 = 1초)
    timer = setInterval(() => {

      // 첫번째 : 0 < 3 (true)
      // 두번째 : 1 < 3 (true)
      // 지연 변수인 배열 notification 크기가 전연 변수인 배열 msgData 의 크기보다 작을 경우 실행되는 코드
      if (notification.length < msgData.length) {
        const index = notification.length;

        // msgData[0] 값 push
        // msgData[1] 값 push
        notification.push(msgData[index]);

        // setState() 함수를 사용하여 state 객체의 notification 을 방금 업데이트한 값으로 수정
        this.setState({
          // 전역변수로 선언된 notification : 변수로 선언한 notification
          notification: notification,
        });
      }
      else {
        // timer 삭제
        clearInterval(timer);
      }
      // 1초 후 다시 실행
    }, 1000);
  }
  // 화면을 생성(렌더링)하는 함수
  render() {
    return (
      <div>
        {/* map : ES6 버전에서 추가된 배열 관련 함수, 지정한 배열의 크기만큼 반복하고 결과를 배열로 반환하는 함수 */}
        {this.state.notification.map((item) => {
          return <Notification key={item.id} message = {item.message} />;
        })}
      </div>
    );
  }
}

export default NotificationList;