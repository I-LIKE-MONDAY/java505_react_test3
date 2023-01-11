// AsyncAwait.jsx

import React from "react";
import axios from "axios";

/*
async / await : 비동기 처리를 조금 더 쉽게 하기 위해서 개발됨
기본적으로 promise 를 사용함

사용법 :
    async function 함수명(매개변수) {
        const 변수명 = await_promise_를_사용하는 함수();
        console.log(변수명);
    }

*/
function AsyncAwait(props) {
    const fetchItems = () => {
        return new Promise((resolve, reject) => {
            const items = [1, 2, 3];
            resolve(items);
        });
    }

    // 프로미스 사용 시 비동기 처리 방법
    const logItem1 = () => {
        fetchItems()
            .then((item) => {
                console.log(item);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    // async / await 사용 시 비동기 처리 방법
    const logItem2 = async () => {
        const resultItems = await fetchItems();
        // ↓ 필요없으면 안써도됨
        // resultItems.then(() => {
        //
        // })
        //     .catch(() => {
        //
        //     });
        console.log(resultItems);
    }


    const getData = async () => {
        const {data} = await axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230109');
        console.log(data.boxOfficeResult.dailyBoxOfficeList);
    }

    return (
        <div>
            <button className={'btn btn-primary'} onClick={logItem1}>프로미스 사용</button>
            <button className={'btn btn-success'} onClick={logItem2}>async/await 사용</button>
            <button className={'btn btn-success'} onClick={getData}>axios와 함께 사용</button>
        </div>
    );
}

export default AsyncAwait;