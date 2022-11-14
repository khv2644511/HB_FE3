function Resume({ 이름, 취미, 자기소개 }) {
  let like = 0;

  function clickLike() {
    like += 1;
    console.log(like);
  }

  return (
    <section>
      <h2>{이름}</h2>
      <p>{취미}</p>
      <p>{자기소개}</p>
      {/* 왜 like 변수는 증가되지 않을까요? 변수가 변경이 된다고 하더라도 렌더링이 다시 일어나지 않기 때문입니다! */}
      <button onClick={clickLike}>{like}</button>
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
