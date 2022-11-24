function Test({ one }) {
  return <div>{one}</div>;
}
function App() {
  return (
    <div>
      <Test {...{ one: "hello" }} />
      <Test test={test} />
      <Test {...test} />
    </div>
  );
}
export default App;
