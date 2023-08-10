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
  highScore,
  setHighScore,
  round,
  setRound,
  setScene,
  getRandomCards,
  cardBackSrc,
}) {
  const [faceUp, setFaceUp] = useState(false);
  const [chosenCards, setChosenCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameOverModalOpen, setGameOverModalOpen] = useState(false);

  const cardFlipDelay = 500;

  const onNewGame = () => {
    setFaceUp(false);
    setScore(0);
    setRound(1);
    setChosenCards([]);
    setGameOver(false);
    setTimeout(() => {
      getRandomCards();
    }, cardFlipDelay);
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
            setGameOverModalOpen={setGameOverModalOpen}
            message={"Game Over"}
            onQuit={onQuit}
            onNewGame={onNewGame}
          ></GameOverModalContent>
        </Modal>
      ) : null}
      <ControlPanel onNewGame={onNewGame} onQuit={onQuit}></ControlPanel>
      <StatsPanel
        score={score}
        highScore={highScore}
        round={round}
      ></StatsPanel>
      <CardTable
        difficulty={difficulty}
        cards={cards}
        setCards={setCards}
        cardBackSrc={cardBackSrc}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
        faceUp={faceUp}
        cardFlipDelay={cardFlipDelay}
        setFaceUp={setFaceUp}
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
