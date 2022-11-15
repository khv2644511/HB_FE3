function App() {
  const handleOnMouseEnter = () => {
    console.log("안녕하세요!");
  };

  // (관습) 핸들러 함수는 앞에 handle을 반드시 붙여줌
  // - `onClick`
  // - `onChange`
  // - `onInput`
  // - `onFocus`
  // - `onMouse`
  // - `onLeave`

  const handleOnMouseLeave = () => {
    console.log("안녕히가세요!");
  };

  return (
    <div>
      <p onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
        여기에 마우스를 올려보세요!
      </p>
    </div>
  );
}

export default App;
