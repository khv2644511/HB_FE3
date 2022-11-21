import { createContext } from "react";

// function Three({ price }) {
//   console.log(price);
//   return <div>가격{price}</div>;
// }

// function Two({ price }) {
//   // console.log(props);
//   return (
//     <div>
//       <Three price={price} />
//     </div>
//   );
// }

// function One({ price }) {
//   return (
//     <div>
//       <Two price={price} />
//     </div>
//   );
// }

// export default function App() {
//   const value = 1000; // 이 값을 three에서 출력하고 싶습니다.
//   return (
//     <div>
//       <One price={value} />
//     </div>
//   );
// }

// function Three(props) {
//   console.log("three", props);
//   return <div>가격{props.price}</div>;
// }

// function Two(props) {
//   console.log("TWO", props);
//   return (
//     <div>
//       <Three price={props.price} />
//     </div>
//   );
// }

// function One(props) {
//   console.log("ONE", props);

//   return (
//     <div>
//       <Two price={props.price} />
//     </div>
//   );
// }

// export default function App() {
//   const value = 1000; // 이 값을 three에서 출력하고 싶습니다.
//   return (
//     <div>
//       <One price={value} />
//     </div>
//   );
// }
