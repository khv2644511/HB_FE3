import { useState, useRef } from "react";

export default function App() {
  const searchValue = useRef(null);
  const [searchResult, serSearchResult] = useState([]);

  const handleSearch = (e) => {
    // 실제로는 fetch해서 얻어온 데이터라고 생각해주세요.
    const data = [
      "개발자 키링 개리",
      "개발자 파우치 위니브",
      "담요",
      "키보드",
      "개발자 키보드",
      "코오오딩 노트",
      "일반 무지 노트",
      "위니브 스티커 팩 - 1",
      "위니브 스티커 팩 - 2",
    ];

    console.log("클릭했어요!");
    console.log(searchValue);
    console.log(searchValue.current.value);
    searchValue.current.value = "hello";

    let searchword = searchValue.current.value;
    searchResult = data.filter((item) => item.includes(searchword));
    serSearchResult(searchResult);

    // console.log(data.filter(item => item.indexOf(searchValue.current.value) !== -1))
    // 여기 fetch 코드가 들어갑니다.
    // fetch(블라블라)
    // ..중략..
  };

  return (
    <div>
      <label>
        검색어를 입력하세요
        <input type="text" ref={searchValue} />
      </label>
      <button onClick={handleSearch}>검색</button>
      {searchResult}
      {/* {여기에 컴포넌트 Array로 넣어주세요!} */}
    </div>
  );
}

// import {useState, useRef} from 'react'

// // 실제로는 fetch해서 얻어온 데이터라고 생각해주세요.
// const data = [
//   '개발자 키링 개리',
//   '개발자 파우치 위니브',
//   '담요',
//   '키보드',
//   '개발자 키보드',
//   '코오오딩 노트',
//   '일반 무지 노트',
//   '위니브 스티커 팩 - 1',
//   '위니브 스티커 팩 - 2'
// ]

// export default function App() {
//   const searchValue = useRef(null)
//   const [searchResult, setSearchResult] = useState([])

//   const handleSearch = (e) => {
//     console.log('클릭했어요!')
//     console.log(searchValue)
//     console.log(searchValue.current.value)

//     setSearchResult(data.filter(item => item.indexOf(searchValue.current.value) !== -1).map(item => <p key={item}>{item}</p>))

//     searchValue.current.value = 'hello'
//   }

//   return (
//     <div>
//       <label>
//         검색어를 입력하세요 :
//         <input type="text" ref={searchValue} />
//       </label>
//       <button onClick={handleSearch}>검색</button>
//       {searchResult}
//     </div>
//   )
// }
