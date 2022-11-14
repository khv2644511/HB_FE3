import { useState } from "react";

function Resume({ 이름, 취미, 자기소개 }) {
  const [like, setLike] = useState(0);
  // const [like, setLike] = useState(100);
  // const [like, setLike] = useState("hello wordl");
  // const [like, setLike] = useState(0);

  function handleClickLike() {
    // like += 1;
    // setLike(like + 1);
    setLike(like + 2);
    // setLike(like + "hello" + "wordl");

    console.log(like);
  }

  return (
    <section>
      <h2>{이름}</h2>
      <p>{취미}</p>
      <p>{자기소개}</p>
      <button onClick={handleClickLike}>{like}</button>
    </section>
  );
}

function App() {
  return (
    <main>
      <Resume 이름="혜빈" 취미="코딩" 자기소개="하이 난 혜빈이고," />
    </main>
  );
}

export default App;
