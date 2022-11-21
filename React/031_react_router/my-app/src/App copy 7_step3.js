import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useParams,
  Outlet,
} from "react-router-dom";

// // 최종 목표
// https://www.studyin.co.kr/
// https://www.studyin.co.kr/login
// https://www.studyin.co.kr/study/6
// https://www.studyin.co.kr/study/6/chat
// https://www.studyin.co.kr/study/6/memo
// https://www.studyin.co.kr/notice
// https://www.studyin.co.kr/notice/recruit
// https://www.studyin.co.kr/notice/business

// // step 1
// https://www.studyin.co.kr/
// https://www.studyin.co.kr/login
// https://www.studyin.co.kr/study
// https://www.studyin.co.kr/notice

// // step 2
// https://www.studyin.co.kr/study/6 를 들어갔을 때에
// {
/* <p>
  6번 게시물에 오신것을 환영합니다. 여기서 fetch를 통해 백엔드로부터 6번
  게시물을 요청하셔야 합니다.
</p>; */
// }
// // step 3
// https://www.studyin.co.kr/study/6/chat
// https://www.studyin.co.kr/study/6/memo 를 들어갔을 때에 각각

// <p>6번 게시물에 오신것을 환영합니다. 여기는 6번 게시물의 채팅방입니다.</p>
// <p>6번 게시물에 오신것을 환영합니다. 여기는 6번 게시물의 메모방입니다.</p>
// */

function Index() {
  return <div>index</div>;
}
function Login() {
  return <div>login</div>;
}
function Study() {
  return <div>study</div>;
}
function StudyDetail(props) {
  // 이전 버전에서는 props로 처리했습니다
  // console.log(props);
  const location = useLocation();
  const params = useParams();
  const { num } = useParams();

  console.log(location);
  console.log(params);
  console.log(num);

  // 이런식으로 데이터를 가지고 와서 아래에다가 데이터를 뿌려주면 blog 형식이 완성되는 것입니다.
  // fetch(`www.test.abc/${num}`)

  return (
    <>
      <h1>study detail</h1>
      <div>{num} 번 게시물에 오신것을 환영 합니다</div>
    </>
  );
}
// function Test() {
//   const location = useLocation();
//   const { test } = useParams();

//   return <div>{test} hello</div>;
// }

function Chat() {
  const location = useLocation();
  const params = useParams();
  console.log(location);
  console.log(params);

  const 채팅방번호 = location.pathname.split("/")[2];

  // 호준님이 자주 하는 방식, 권하진 않음
  return (
    <p>
      {채팅방번호}번 게시물에 오신것을 환영합니다. 여기는
      {채팅방번호}번 게시물의 채팅방입니다. 여러분이 fetch를 통해 백엔드에서
      채팅 정보를 받아와야 합니다.
    </p>
  );
}

function Memo() {
  const location = useLocation();
  const { num } = useParams();
  console.log(location);
  // console.log(params);

  // 깔끔한 방식
  return (
    <p>
      {num}번 게시물에 오신것을 환영합니다. 여기는 {num}번 게시물의 메모입니다.
    </p>
  );
}
function Notice() {
  return <div>notice</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/study" element={<Study />} />
        <Route path="/study/:num" element={<StudyDetail />} />
        {/* <Route path="/study/:num/:test" element={<Test />} /> */}
        <Route path="/study/:num/:chat" element={<Chat />} />
        <Route path="/study/:num/memo" element={<Memo />} />

        <Route path="/notice" element={<Notice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
