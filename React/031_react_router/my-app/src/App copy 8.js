import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useParams,
  Outlet,
} from "react-router-dom";

/* Quiz - Route 사용하여 페이지 경로 만들기*/
// - Home Page : /
// - Product Detail Page : /products/:id

//     ex) /products/1 , /products/2, /products/3, /products/4

// - Product Detail Notice Page : /products/:id/notice
//     - ex) /products/1/notice , /products/2/notice…
// - Cart Page : /cart
// - Coupon Page : /users/coupon
// - Question Page : /users/question
// - Notice Page : /users/notice
// - User Page : /users

function HomePage() {
  return <div>login</div>;
}
function A() {
  return <div>A</div>;
}
function B() {
  return <div>b</div>;
}
function C() {
  return <div> C</div>;
}

function Cnum() {
  const { id } = useParams();
  return <div>{id} C</div>;
}

function Ctext() {
  const { text } = useParams();
  return <div>{text} C</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/a" element={<A />} />
        <Route path="/b" element={<B />} />
        <Route path="/c" element={<C />} />
        <Route path="/c/:id" element={<Cnum />} />
        <Route path="/c/:text" element={<Ctext />} />

        {/* <Route path="/c/*" element={<Outlet />}>
          <Route path="" element={<C />} />
          <Route path="1" element={<C1 />} />
          <Route path="2" element={<C2 />} />
          <Route path="d" element={<CD />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
