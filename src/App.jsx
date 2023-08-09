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

  const getRandomCards = async () => {
    const response = await fetch(
      `https://deckofcardsapi.com/api/deck/new/draw/?count=${difficulty}`
    );
    const returnData = await response.json();
    setCards(returnData.cards);
  };

  const cardBack = "https://www.deckofcardsapi.com/static/img/back.png";

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
          round={round}
          setRound={setRound}
          setScene={setScene}
          getRandomCards={getRandomCards}
          cardBack={cardBack}
        ></GameScene>
      ) : null}
    </div>
  );
}

export default App;
