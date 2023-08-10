import styles from "./App.module.css";
import { useEffect, useState } from "react";
import GitLinkHeader from "./components/GitLinkHeader/GitLinkHeader";
import TitleScene from "./components/TitleScene/TitleScene";
import GameScene from "./components/GameScene/GameScene";

function App() {
  const [scene, setScene] = useState("Title");
  const [difficulty, setDifficulty] = useState(10);
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [highScore, setHighScore] = useState(0);

  // Check for a high score exiting already on mount
  useEffect(() => {
    const localHighScore = localStorage.getItem("highScore");
    if (localHighScore) {
      setHighScore(localHighScore);
    }
  }, []);

  // Set new high score to local storage
  useEffect(() => {
    const localHighScore = localStorage.getItem("highScore");
    if (localHighScore && highScore > localHighScore) {
      localStorage.setItem("highScore", highScore);
    }
  }, [highScore]);

  const getRandomCards = async () => {
    const response = await fetch(
      `https://deckofcardsapi.com/api/deck/new/draw/?count=${difficulty}`
    );
    const returnData = await response.json();
    setCards(returnData.cards);
  };

  const cardBackSrc = "https://www.deckofcardsapi.com/static/img/back.png";

  return (
    <div className={styles.appContainer}>
      {scene === "Title" ? (
        <>
          <GitLinkHeader></GitLinkHeader>
          <TitleScene
            setScene={setScene}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            getRandomCards={getRandomCards}
          ></TitleScene>
        </>
      ) : scene === "Game" ? (
        <GameScene
          difficulty={difficulty}
          cards={cards}
          setCards={setCards}
          score={score}
          setScore={setScore}
          highScore={highScore}
          setHighScore={setHighScore}
          round={round}
          setRound={setRound}
          setScene={setScene}
          getRandomCards={getRandomCards}
          cardBackSrc={cardBackSrc}
        ></GameScene>
      ) : null}
    </div>
  );
}

export default App;
