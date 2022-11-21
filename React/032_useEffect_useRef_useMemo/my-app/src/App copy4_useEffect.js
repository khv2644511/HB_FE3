import { useState, useEffect } from "react";

function Counter() {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);

  const handleOneUp = (e) => {
    setOne(one + 1);
  };
  const handleTwoUp = (e) => {
    setTwo(two + 1);
  };
  const handleThreeUp = (e) => {
    setThree(three + 1);
  };

  let test = 0;
  const handleTestUp = (e) => {
    test += 1;
    console.log(test);
  };
  useEffect(() => {
    if (one % 2) {
      alert("홀수입니다.");
    } else {
      alert("짝수입니다.");
    }
  }, [one, two]);

  return (
    <>
      <div>{one}</div>
      <button onClick={handleOneUp}>Up!</button>
      <div>{two}</div>
      <button onClick={handleTwoUp}>Up!</button>

      {/* 렌더링은 되나, 이벤트 useEffect는 실행되지 않음(useEffect의 감시되는 변수에서 빠졌기때문) */}
      <div>{three}</div>
      <button onClick={handleThreeUp}>Up!</button>

      {/* 렌더링 자체가 안됨 */}
      <div>{test}</div>
      <button onClick={handleTestUp}>Up!</button>
    </>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
