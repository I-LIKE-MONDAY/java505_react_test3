// Calculator.jsx
import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>물이 끓습니다.</p>;
  }
  return <p>물이 끓지 않습니다.</p>;
}

// 매개변수로 화씨 온도를 받아서 섭씨 온도로 변환
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// 매개변수로 섭씨 온도를 받아서 화씨 온도로 변환
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// 매개변수로 현재 온도와 온도 변환을 위한 함수(convert)를 받아서 사용
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  // 입력받은 온도가 숫자인지 아닌지 확인, 숫자가 아니면 빈 문자열 "" 반환
  if (Number.isNaN(input)) {
    return "";
  }

  // 두번째 매개변수로 받은 변환함수(convert) 를 사용하여 표시 온도를 변환
  const output = convert(input);
  // 수학 관련 함수를 사용하여 소수점 이하 부분 처리(반올림)
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();

}

function Calculator(props) {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('C');

  const handleCelsiusChange = (temperature) => {
    setTemperature(temperature);
    setScale('c');
  };

  const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale('f');
  };

  // 현재 온도를 표시방식에 따라서 변환
  const celsius = scale === 'f' ? tryConvert(temperature,  toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature,  toFahrenheit) : temperature;

  return (
    <div>
      {/* 자식 컴포넌트 호출 시 props에 2개의 데이터와 state 의 값을 변경할 수 있는 함수를 제공 */}
      <TemperatureInput scale={'c'} temperature={celsius} onTemperatureChange={handleCelsiusChange} />
      <TemperatureInput scale={'f'} temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
      {/* 온도를 props 를 통해서 전달, 실수로 표현하기 위해서 parseFloat() 사용 */}
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}

export default Calculator;