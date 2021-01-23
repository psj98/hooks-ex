import React, { useState } from "react";
import ReactDOM from "react-dom";
import useInput from "./useInput";

import "./styles.css";

const App = () => {
  // useState(var) var로 초기값 설정
  const [item, setItem] = useState(1); // setItem : item 변수 설정하는 함수
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  // validator function (value값을 넘겨줌) → 길이가 10이하면 아니면 false
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);

  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>Increment</button>
      {/* click하면 incrementItem 함수 실행 */}
      <button onClick={decrementItem}>Increment</button>
      {/* click하면 decrementItem 함수 실행 */}
      <input placeholder="Name" {...name} />
      {/* ...name : name에 해당하는 것들을 모두 unpack시켜줌 */}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
