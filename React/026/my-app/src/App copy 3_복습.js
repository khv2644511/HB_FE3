// // step1. key
// const arr = [10, 20, 30, 40, 50];
// function App() {
//   return (
//     <div>
//       {/* {arr.map((v) => (
//         // <p>{v}</p>
//       ))} */}
//       {/* Key 값으로 숫자와 문자 모두 올 수 있다 */}
//       {arr.map((v) => (
//         <p key={v}>{v}</p>
//       ))}
//       {arr.map((v) => (
//         <p key={v.toString()}>{v}</p>
//       ))}
//     </div>
//   );
// }

// step2
// const value = 3;
// const value = 2;
// const value = 31
// function App() {
//   if (value === 1) {
//     return <h1>hello1</h1>;
//   } else if (value === 2) {
//     return <h1>hello2</h1>;
//   } else if (value === 3) {
//     return <h1>hello3</h1>;
//   }
// }

// step3 스타일 적용하기
// npm install styled-components
// npm i styled-reset
import reset from "styled-reset";
import styled from "styled-components";
const DivBlue = styled.div`
  color: blue;
`;
const DivRed = styled.div`
  color: red;
`;

function App() {
  return (
    <>
      <DivBlue>heloo</DivBlue>
      <DivRed>hi</DivRed>
    </>
  );
}

export default App;
