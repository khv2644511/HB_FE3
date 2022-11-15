import styled from "styled-components";

const One = styled.div`
  color: red;
`;

const Two = styled.div`
  color: green;
  font-size: ${(props) => props.size + "px"};
`;

const Three = styled.div`
  color: ${(옵션) => (옵션.option === "하나" ? "red" : "pink")};
`;

function App() {
  return (
    <>
      <One>hello</One>
      <Two size={32}>world</Two>
      <Three option={"하나"}>하나</Three>
    </>
  );
}

export default App;
