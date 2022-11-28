// import { useState, useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./context/UserContext";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import Home from "./pages/Home/Home";
// import "./app.css";
import "./reset.css";
import "./global.css";

function App() {
  const [userId, setUserId] = useState(1);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <UserContext.Provider value={{ userId, isLogin }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
export default App;

// npx create-react-app my-app --template basic-react
// cd my-app
// npm i react-router-dom styled-components axios
