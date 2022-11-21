import { useState, useEffect, useLayoutEffect } from "react";
// # useEffect

// - 화면이 실행되고 나서 그려지므로 깜빡임이 발생함
// - 깜빡이면 useEffect 대신 useLayoutEffect를 발생하면 된다.
// - 브라우저 페인팅 스크린이 되기 전에 레이아웃이 실행되기 때문에 깜빡임이 발생하는 것이다
// - 변수 감시용
// - 페인팅 후에 작업을 해줘야 할 때 사용

// # useLayoutEffect

// - 깜빡임이 발생할 때 사용
// - 페인팅 전에 작업을 해줘야 할 때 사용
function App() {
  const [value, setValue] = useState(100);

  // useEffect(() => {
  //   if (value >= 1000) {
  //     setValue(300);
  //   }
  // }, [value]);
  useLayoutEffect(() => {
    if (value >= 1000) {
      setValue(300);
    }
  }, [value]);

  return (
    <div>
      {/* <div style={{ width: value, height: value, backgroundColor: 'blue', transition: '1s all' }}></div> */}
      <div
        style={{ width: value, height: value, backgroundColor: "blue" }}
      ></div>
      <button
        onClick={() => {
          setValue(1000);
        }}
      >
        커져랏!
      </button>
      <button
        onClick={() => {
          setValue(200);
        }}
      >
        작아져랏!
      </button>
    </div>
  );
}

export default App;
