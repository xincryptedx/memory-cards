import styles from "./App.module.css";
import { useState } from "react";
import GitLinkHeader from "./components/GitLinkHeader/GitLinkHeader";
import TitleScene from "./components/TitleScene/TitleScene";
import GameScene from "./components/GameScene/GameScene";

function App() {
  const [scene, setScene] = useState("Title");
  const [difficulty, setDifficulty] = useState(10);
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);

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
        <GameScene
          difficulty={difficulty}
          cards={cards}
          setCards={setCards}
          score={score}
          setScore={setScore}
        ></GameScene>
      ) : null}
    </div>
  );
}

export default App;
