import Helloworld from "./HelloWorld_태수";
import { useState } from "react";

const hellohyebin = (str) => {
  console.log(str);
};

function onlog(e) {
  // console.log("저는 상위요소인 App입니다.");
  // console.log(e.target.textContent);
}

const getData = (e) => {
  const [inputData, setinputData] = useState("");
  console.log(inputData);
};

function App() {
  const data = [
    { name: "2DC", age: 30 },
    {
      name: "hyep",
      age: 25,
    },
  ];

  return (
    <div>
      <Helloworld
        name={data[0].name}
        age={data[0].age}
        log={onlog}
        hello={hellohyebin}
        anotherlog={getData}
      />
    </div>
  );
}

export default App;
