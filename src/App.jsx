import styles from "./App.module.css";
import { useState } from "react";
import GitLinkHeader from "./components/GitLinkHeader/GitLinkHeader";
import TitleScene from "./components/TitleScene/TitleScene";
import GameScene from "./components/GameScene/GameScene";

function App() {
  const [scene, setScene] = useState("Title");
  const [difficulty, setDifficulty] = useState(10);

  return (
    <div className={styles.appContainer}>
      {scene === "Title" ? (
        <>
          <GitLinkHeader></GitLinkHeader>
          <TitleScene
            setScene={setScene}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          ></TitleScene>
        </>
      ) : scene === "Game" ? (
        <GameScene difficulty={difficulty}></GameScene>
      ) : null}
    </div>
  );
}

export default App;
