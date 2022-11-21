import { useState, useEffect } from "react";
// 외우기
// // 컴포넌트가 업데이트 될 때마다 매번 실행
// useEffect(()=>{
//   console.log('hello world');
// })

// // 처음에만 실행
// useEffect(()=>{
//   console.log('hello world');
// }, [])

// // 변수들의 변화가 일어날 때마다 실행
// useEffect(()=>{
//   console.log('hello world');
// }, [변수1, 변수2...])

function Time(props) {
  const [today, setToday] = useState(new Date());
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  console.log("렌더링이 됩니다..?");
  useEffect(() => {
    let time = setInterval(() => {
      const t = new Date();
      setToday(t);
    }, 1000);
    return () => {
      clearInterval(time);
    };
  }, [today]);

  return (
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}

export default Time;
