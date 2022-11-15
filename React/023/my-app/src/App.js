import Homepage from "./components/pages/homepage/Homepage";
import Login from "./components/pages/login/Login";

function App() {
  const user = {
    login: true,
    id: "licat",
    email: "paul-lab@naver.com",
    img: "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792__340.png",
  };

  return (
    <main>
      {user.login ? (
        <Homepage id={user.id} email={user.email} img={user.img} />
      ) : (
        <Login />
      )}
    </main>
  );
}

export default App;
