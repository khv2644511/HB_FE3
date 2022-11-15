import { useState } from "react";
import Contents from "./Contents";

export default function Navbar() {
  const [listName, setListName] = useState("one");
  const handleChangeId = (e) => {
    setListName(e.target.id);
  };
  return (
    <>
      <nav>
        <ul>
          <li
            id="one"
            style={listName === "one" ? { color: "red" } : { color: "black" }}
            onClick={handleChangeId}
          >
            one
          </li>
          <li
            id="two"
            style={listName === "two" ? { color: "red" } : { color: "black" }}
            onClick={handleChangeId}
          >
            two
          </li>
          <li
            id="three"
            style={listName === "three" ? { color: "red" } : { color: "black" }}
            onClick={handleChangeId}
          >
            three
          </li>
          <li
            id="four"
            style={listName === "four" ? { color: "red" } : { color: "black" }}
            onClick={handleChangeId}
          >
            four
          </li>
          <li
            id="five"
            style={listName === "five" ? { color: "red" } : { color: "black" }}
            onClick={handleChangeId}
          >
            five
          </li>
        </ul>
        <Contents listName={listName}></Contents>
      </nav>
    </>
  );
}
