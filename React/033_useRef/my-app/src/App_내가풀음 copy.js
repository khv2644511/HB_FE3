import { useState, useRef } from "react";

// 문제 input창 3개를 만들어 자기소개를 하는 기능을 만들어주세요.
// input 1 - 이름
// input 2 - 성별
// input 3 - 나이
// button - 자기소개
// return - 제 이름은 이호준입니다. 저는 남자이고요. 나이는 10살입니다.

export default function App() {
  const namValue = useRef(null);
  const sexValue = useRef(null);
  const ageValue = useRef(null);

  const [Result, setResult] = useState([]);

  const handleSearch = (e) => {
    console.log("클릭했어요!");
    console.log(namValue.current.value);
    console.log(sexValue.current.value);
    console.log(ageValue.current.value);

    setResult(
      Result.push(
        namValue.current.value,
        sexValue.current.value,
        ageValue.current.value
      )
    );

    console.log(Result);
    setResult(Result.map((v, i) => <div key={i}>{v}</div>));
  };

  return (
    <div>
      <label>
        이름 입력하세요 :
        <input type="text" ref={namValue} />
      </label>
      <label>
        성별을 입력하세요 :
        <input type="text" ref={sexValue} />
      </label>
      <label>
        나이를 입력하세요 :
        <input type="text" ref={ageValue} />
      </label>
      <button onClick={handleSearch}>검색</button>
      <div>제 이름은{Result[0]}</div>
      <div>제 성별은{Result[1]}</div>
      <div>제 나이는{Result[2]}</div>
    </div>
  );
}
