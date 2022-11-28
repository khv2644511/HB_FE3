import React from "react";
import { Link } from "react-router-dom";
import iconWrite from "../../../assets/icon-modify-white.svg";

export default function Login() {
  return (
    <>
      <li className="profile-img">
        <Link to="/">
          <img
            src={
              "https://github.com/weniv/react-blog/blob/react/public/assets/profile.jpg?raw=true"
            }
            alt="My Page"
          />
        </Link>
      </li>
      <li>
        <Link to="/" className="button">
          <img src={iconWrite} alt="" />
          <span>Write</span>
        </Link>
      </li>
      <li>
        <button className="button white">
          <img src="./assets/icon-logout.svg" alt="" />
          <span>Logout</span>
        </button>
      </li>
    </>
  );
}
