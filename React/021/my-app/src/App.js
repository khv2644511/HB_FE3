function One(props) {
  return (
    <>
      <p>{props.name}님 안녕하세요!</p>
      <p>당신의 나이는 {props.age * 5} 입니다!</p>
    </>
  );
}

function Two({ name, age }) {
  return (
    <>
      <p>{name}님 안녕하세요!</p>
      <p>당신의 나이는 {age}입니다!</p>
    </>
  );
}

function App() {
  return (
    <>
      <p>hello world1</p>
      <p>hello world2</p>
      <br />
      <br />

      <One name="hyebin" age={25} />
      <br />
      <br />

      <Two name="hyebin" age={25} />
    </>
  );
}

export default App;
