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
function ProductDetail() {
  const { id } = useParams();

  return <div>{id} product</div>;
}
function Notice() {
  const { id } = useParams();
  return <div>{id} product notice</div>;
}
function Cart() {
  return <div>Cart</div>;
}

function User() {
  return <div>User</div>;
}

function Coupon() {
  return <div>Coupon</div>;
}

function Question() {
  return <div>Question</div>;
}
function UserNotice() {
  return <div>UserNotice</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/product/:id/notice" element={<Notice />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/users/*" element={<Outlet />}>
          <Route path="" element={<User />} />
          <Route path="coupon" element={<Coupon />} />
          <Route path="question" element={<Question />} />
          <Route path="usernotice" element={<UserNotice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
