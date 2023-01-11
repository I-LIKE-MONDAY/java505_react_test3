// DailyBoxOffice.jsx

import React, {useState} from "react";
import axios from "axios";


// 문제 1. 버튼 클릭 시 axios 통신을 통해서 데이터를 가져와서 화면의 table 에 출력하는 컴포넌트를 작성하세요
// state 사용.( 화면이 업데이트 되니까), 배열로 들어오니까 map() 사용.
function DailyBoxOffice(props) {
    // boxOffice 를 state 로 설정. 주의: 초기값을 빈 배열로 넣어줘야함. 만약 '' (빈 문자열)형태로 넣으면 아래에서 map 함수가 동작하지 않음
    const [boxOffice, setBoxOffice] = useState([]);

    const loadBoxOffice = () => {
        axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230109')
            .then((req) => {
                const DailyBoxOffice = req.data.boxOfficeResult.dailyBoxOfficeList;

                setBoxOffice(DailyBoxOffice);
                console.log(DailyBoxOffice);
            })
            .catch((err) => {
                console.log('통신 시 오류가 발생하였습니다.');
            });
    }

    const asyncBoxOffice = async () => {
        const {data} = await axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230109');
        const DailyBoxOffice = data.boxOfficeResult.dailyBoxOfficeList;
        setBoxOffice(DailyBoxOffice);
    }


    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-sm-8 mx-auto"}>
                    <table className={"table table-striped table-hover"}>
                        <thead>
                        <tr>
                            <th>순위</th>
                            <th>제목</th>
                            <th>개봉일</th>
                            <th>당일 관람객</th>
                            <th>누적 관람객</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            boxOffice.map((item) => {
                                console.log(item);
                                return (
                                    <tr key={item.rnum}>
                                        <td>{item.rank}</td>
                                        <td>{item.movieNm}</td>
                                        <td>{item.openDt}</td>
                                        <td>{item.audiCnt}</td>
                                        <td>{item.audiAcc}</td>
                                    </tr>
                                );
                            })
                        }
                        </tbody>
                    </table>
                    <hr/>
                    <div className={'my-3 d-flex justify-content-end'}>
                        <button className={'btn btn-outline-primary btn-sm'} onClick={loadBoxOffice}>영화 순위 조회</button>
                        <button className={'btn btn-outline-primary btn-sm'} onClick={asyncBoxOffice}>영화 순위 조회(async/await 이용)</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DailyBoxOffice;