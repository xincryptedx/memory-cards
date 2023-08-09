/* eslint-disable react/prop-types */
import CardTable from "./CardTable";
import ControlPanel from "./ControlPanel";
import styles from "./GameScene.module.css";
import StatsPanel from "./StatsPanel";
import { useState } from "react";

function GameScene({
  difficulty,
  cards,
  setCards,
  score,
  setScore,
  round,
  setRound,
  setScene,
  getRandomCards,
}) {
  const [chosenCards, setChosenCards] = useState([]);

  const onNewGame = () => {
    setScore(0);
    setRound(1);
    setChosenCards([]);
    getRandomCards();
  };

  const onQuit = () => {
    setCards([]);
    setScore(0);
    setRound(1);
    setChosenCards([]);
    setScene("Title");
  };

  return (
    <main className={styles.gameScene}>
      <ControlPanel onNewGame={onNewGame} onQuit={onQuit}></ControlPanel>
      <StatsPanel score={score} round={round}></StatsPanel>
      <CardTable
        difficulty={difficulty}
        cards={cards}
        setScore={setScore}
        chosenCards={chosenCards}
        setChosenCards={setChosenCards}
      ></CardTable>
    </main>
  );
}

export default GameScene;
