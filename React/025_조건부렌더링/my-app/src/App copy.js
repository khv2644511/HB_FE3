function Hello({ name }) {
  if (name) {
    return <h2>{name}</h2>;
  }
  return <div>이름이 입력되지 않았습니다.</div>;
}

function App() {
  return <Hello name="licat" />;
}

export default App;
