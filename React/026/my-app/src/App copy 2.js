import styled from "styled-components";

const ContentsDivOne = styled.div`
  color: red;
`;

const ContentsDivTwo = styled.div`
  color: green;
`;

const ContentsDivThree = styled.div`
  color: blue;
`;

function App() {
  return (
    <>
      <ContentsDivOne>hello world</ContentsDivOne>
      <ContentsDivTwo>hello world</ContentsDivTwo>
      <ContentsDivThree>hello world</ContentsDivThree>
    </>
  );
}

export default App;
