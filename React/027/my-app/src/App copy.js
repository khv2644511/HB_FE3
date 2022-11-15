import One from "./components/One/One";
import Two from "./components/Two/Two";
import styles from "./App.module.css";
function App() {
  return (
    <>
      <h1>hello world</h1>
      <p className={styles.contents}>hello world</p>
      <One />
      <Two />
    </>
  );
}

export default App;
