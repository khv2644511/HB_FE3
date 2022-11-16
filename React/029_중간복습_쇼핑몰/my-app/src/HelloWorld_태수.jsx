import { useState } from "react";

const Helloworld = (props) => {
  //   props.hello("혜빈님 안녕하세요");
  const [inputData, setinputData] = useState("");

  const handleInput = (e) => {
    setinputData(e.target.value);
  };
  const printData = (e) => {
    console.log(inputData);
  };

  //   console.log(props);
  const a = props.name;
  const b = props.age;

  return (
    <>
      <input onChange={handleInput}></input>
      <button onClick={props.anotherlog}>나는 버튼이다.</button>
      <h1 onClick={props.log}>
        Hello world {a}, {b}
      </h1>
    </>
  );
};

export default Helloworld;
