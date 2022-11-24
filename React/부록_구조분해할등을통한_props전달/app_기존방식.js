function Test({ one }) {
  return <div>{one}</div>;
}
function App() {
  const test = { one: "hello" };
  return (
    <div>
      <Test {...{ one: "hello" }} />
    </div>
  );
}
export default App;
