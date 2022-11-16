function One() {
  return <div>hello world</div>;
}

function Two(props) {
  console.log(props);
  return <div>{props.children}</div>;
}

function App() {
  return (
    <div>
      {console.log(<One />)}
      <Two>
        <h2 className="twoclass" key="100">
          hello world
        </h2>
        <p>hello world</p>
      </Two>
    </div>
  );
}
export default App;
