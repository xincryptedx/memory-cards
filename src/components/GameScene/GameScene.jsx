/* eslint-disable react/prop-types */
import CardTable from "./CardTable";
import ControlPanel from "./ControlPanel";
import styles from "./GameScene.module.css";
import StatsPanel from "./StatsPanel";
import { useState } from "react";
import Modal from "../Modal/Modal";
import GameOverModalContent from "../Modal/GameOverModalContent";

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
  cardBackSrc,
}) {
  const [chosenCards, setChosenCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameOverModalOpen, setGameOverModalOpen] = useState(false);

  const onNewGame = () => {
    setScore(0);
    setRound(1);
    setChosenCards([]);
    getRandomCards();
    setGameOver(false);
  };

  const onQuit = () => {
    setCards([]);
    setScore(0);
    setRound(1);
    setChosenCards([]);
    setScene("Title");
  };

  const onNextRound = () => {
    setRound((p) => p + 1);
    setChosenCards([]);
    getRandomCards();
  };

  return (
    <main className={styles.gameScene}>
      {gameOverModalOpen ? (
        <Modal>
          <GameOverModalContent
            message={"Game Over"}
            onQuit={onQuit}
            onNewGame={onNewGame}
          ></GameOverModalContent>
        </Modal>
      ) : null}
      <ControlPanel onNewGame={onNewGame} onQuit={onQuit}></ControlPanel>
      <StatsPanel score={score} round={round}></StatsPanel>
      <CardTable
        difficulty={difficulty}
        cards={cards}
        setCards={setCards}
        cardBackSrc={cardBackSrc}
        setScore={setScore}
        chosenCards={chosenCards}
        setChosenCards={setChosenCards}
        onNextRound={onNextRound}
        gameOver={gameOver}
        setGameOver={setGameOver}
        setGameOverModalOpen={setGameOverModalOpen}
      ></CardTable>
    </main>
  );
}

export default GameScene;
