import { useState } from "react";
import GitLinkHeader from "./components/GitLinkHeader/GitLinkHeader";
import TitleScene from "./components/TitleScene/TitleScene";
import styles from "./App.module.css";

function App() {
  const [scene, setScene] = useState("Title");

  return (
    <div className={styles.appContainer}>
      <GitLinkHeader></GitLinkHeader>
      {scene === "Title" ? (
        <TitleScene setScene={setScene}></TitleScene>
      ) : scene === "Game" ? null : null}
    </div>
  );
}

export default App;
