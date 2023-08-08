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
  const [round, setRound] = useState(1);

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
          round={round}
          setRound={setRound}
          setScene={setScene}
        ></GameScene>
      ) : null}
    </div>
  );
}

export default App;
