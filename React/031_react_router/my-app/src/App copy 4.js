import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

function Index() {
  return <h2>Main 입니다!</h2>;
}

function ProductDetails() {
  const location = useLocation();
  // console.log(location);
  // console.log(location.pathname);
  // console.log(location.pathname.slice(-1));
  console.log(location.pathname.split("/")[2]);
  const path = location.pathname.split("/")[2];
  const urlSlicingValue = location.pathname.split("/")[2];
  const imgUrl = `http://test.api.weniv.co.kr/asset/img/${urlSlicingValue}/thumbnailImg.jpg`;
  console.log(imgUrl);
  return (
    <>
      <h2>{path} 번 상품 디테일 화면입니다!</h2>
      <img src={imgUrl} alt="" />
    </>
  );
}

function Cart() {
  return <h2>장바구니 화면입니다!</h2>;
}

function Buy() {
  return <h2>구입목록 입니다!</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
      <Link to="/Product/2"> ProductDetails </Link>
      <Link to="/Cart"> Cart </Link>
      <Link to="/Buy"> Buy </Link>

      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/buy" element={<Buy />} />
        {/* <Route path="/blog" element={<BlogHome />} /> */}
        {/* <Route path="/blog/:id" element={<Blog />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
