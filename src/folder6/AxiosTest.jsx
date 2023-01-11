// AxiosTest.jsx

import React, {useEffect} from "react";
import axios from "axios";

/*
axios : node.js 에서 비동기 통신을 하기 위한 라이브러리, promise 를 사용함
axios 는 rest 방식을 지원함
    get(url, config) : get 방식으로 서버에 데이터를 요청함
    post(url, data[, config]) : post 방식으로 서버에 데이터를 전달
    put(url, data[, config]) : put 방식으로 서버에 데이터 전달
    delete(url, data[, config] : delete 방식으로 데이터 전달
    options(url, config) : axios 객체 생성 시 설정 정보를 변경할 수 있음

    then() : 정상적으로 통신이 성공했을 경우 실행
    catch() : 통신이 실패했을 경우 실행

    async/await 와 함께 사용 시 then(), catch() 는 필요할 경우 나중에 호출할 수 있음
    async/await 와 함께 사용 시 예외처리를 try/catch 로 처리함

    응답 객체 : 요청에 대한 응답 객체가 json 방식으로 전달됨
    data{} : 서버에서 제공한 데이터 json 타입
    status : 서버와의 통신 응답 신호, 200 : ok, 300 : redirect, 400 : 리소스 없음, 500 : 서버 내부 오류
    statusText : 서버와의 응답 메시지
    headers{} : 서버에서 응답한 헤더 정보
    config{} : 서버에 요청 시 axios 의 설정 정보
    request{} : 응답을 생성한 요청

사용법 :
    npm install axios : 사용할 프로젝트 axios 설치
    import axios from 'axios'; : 사용할 컴포넌트에서 axios import

    (사용법1)
    axios.get(url)
    .then(function(req) {
        성공 시 실행할 소스;
    })
    .catch(function(err) {
        실패 시 실행할 소스;
    })

    (사용법2)
    axios({
        method: 'get|post|put|delete',
        url: 'url',
        data: {
            param1: 'data',
            param2: 'data'
        },
    });

    axios.post(url, {
        param1: 'data1',
        param2: 'data2'
    })
    .then(function(req) {
        성공 시 실행할 소스;
    })
    .catch(function(err) {
        실패 시 실행할 소스;
    });
*/
function AxiosTest(props) {
    const value = 11;
    useEffect(() => {
        axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230109')
            .then((req) => {
                alert("통신성공");
                console.log(req);
                console.log(req.data);
                const list = req.data.boxOfficeResult.dailyBoxOfficeList;

                for (let i = 0; i < list.length; i++) {
                    let str = `순번 : ${list[i].rnum}
                    순위 : ${list[i].rank}
                    제목 : ${list[i].movieNm}
                    개봉일 : ${list[i].openDt}
                    관람객 : ${list[i].audiCnt}`
                    console.log(str + '\n');
                }
            })
            .catch((err) => {
                alert("통신실패");
            });
    });
    return (
        <div>

        </div>
    );
}

export default AxiosTest;