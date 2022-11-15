import React, { useState } from "react";

function Resume(props) {
  const [like, setLike] = useState(0);

  const [message, setMessage] = useState("hello");

  function handleClickLike() {
    // setLike(like + 1)
    // console.log(like);
    setLike(like + 1);
  }

  function handleMouseOver() {
    // console.log("gk");
    setMessage("world");
  }

  function handleMouseOut() {
    setMessage("hello");
  }

  return (
    <div>
      <button onClick={handleClickLike}>like : {like}</button>
      <br />
      <br />
      <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        마우스 오버해보세요
      </button>
      <div>{message}</div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>App.js test1</h1>
      <Resume />
    </div>
  );
}

export default App;
