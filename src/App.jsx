import styles from "./App.module.css";
import { useState } from "react";
import GitLinkHeader from "./components/GitLinkHeader/GitLinkHeader";
import TitleScene from "./components/TitleScene/TitleScene";
import GameScene from "./components/GameScene/GameScene";

const powers = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];
const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

function App() {
  const [scene, setScene] = useState("Title");
  const [difficulty, setDifficulty] = useState(10);
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);

  const getRandomCards = () => {
    const cardCombinations = [];
    powers.map((power) => {
      suits.map((suit) => cardCombinations.push([power, suit]));
    });
    cardCombinations.sort(() => Math.random() - 0.5);

    for (let i = 0; i < difficulty; i += 1) {
      const [power, suit] = cardCombinations.pop();
      setCards((c) => [...c, { key: i, power: power, suit: suit }]);
    }
  };

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
        ></GameScene>
      ) : null}
    </div>
  );
}

export default App;
