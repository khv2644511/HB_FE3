function One(props) {
  console.log("//one 시작");
  console.log(props);
  console.log(props.children[0]);

  console.log("//one 끝");

  // props.children => array => array 를 중괄호로 감싸서 {[]} 요 형태가되면 안에 값만 나온다?
  return <div>{props.children}</div>;
}

function Two(props) {
  console.log("//Two 시작");
  console.log(props);
  console.log("//Two 끝");

  // props.children => array => array 를 중괄호로 감싸서 {[]} 요 형태가되면 안에 값만 나온다?
  return <div>{props.children}</div>;
}

function Three(props) {
  console.log("//Three 시작");
  console.log(props);
  console.log("//Three 끝");

  // props.children => array => array 를 중괄호로 감싸서 {[]} 요 형태가되면 안에 값만 나온다?
  return <div>hello</div>;
}

function Four(props) {
  console.log("//Four 시작");
  console.log(props);
  console.log("//Four 끝");

  // props.children => array => array 를 중괄호로 감싸서 {[]} 요 형태가되면 안에 값만 나온다?
  return <div>hello</div>;
}

function Five(props) {
  return (
    <div>
      <p>hello</p>
      <Six></Six>
    </div>
  );
}

function Six(props) {
  return <div>hello</div>;
}

function App() {
  return (
    <div>
      <h1>app - h1</h1>
      <p>app - p</p>
      <One>
        <h2>app &gt; One - h1</h2>
        <p>app &gt; One- p</p>
        <Two>
          <p>app &gt; One &gt; Two - p</p>
        </Two>
        <Three></Three>
        <Four></Four>
        <Five></Five>
      </One>
    </div>
  );
}
export default App;
