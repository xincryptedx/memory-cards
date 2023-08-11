/* eslint-disable react/prop-types */
import { useEffect } from "react";
import styles from "./Card.module.css";

function Card({
  code,
  power,
  suit,
  image,
  cardBackSrc,
  score,
  setScore,
  highScore,
  setHighScore,
  chosenCards,
  setChosenCards,
  handleEndOfTurn,
  gameOver,
  setGameOver,
  setGameOverModalOpen,
  faceUp,
  setMountedCards,
}) {
  const name = `${power} of ${suit}`;

  const onChooseCard = () => {
    // Check if the card is in chosenCards if face up and game not over
    if (chosenCards.includes(code) && !gameOver && faceUp) {
      setGameOver(true);
      setGameOverModalOpen(true);
    } else if (!gameOver && faceUp) {
      setScore((p) => p + 1);
      if (score + 1 > highScore) {
        setHighScore(score + 1);
      }
      setChosenCards((p) => [...p, code]);
      handleEndOfTurn();
    }
  };

  const onKeyboardEnter = (e) => {
    if (e.key === " " || e.key === "Enter" || e.key === "Spacebar") {
      onChooseCard();
    }
  };

  useEffect(() => {
    setMountedCards((p) => p + 1);
    return () => setMountedCards((p) => p - 1);
  }, [setMountedCards]);

  return (
    <div
      className={`${styles.card} ${faceUp ? styles.faceUp : ""}`}
      onClick={onChooseCard}
      role="button"
      tabIndex={0}
      onKeyDown={onKeyboardEnter}
    >
      <div className={styles.cardGlow} />
      <div className={styles.cardInner}>
        <img className={styles.front} src={image} alt={name} />
        <img className={styles.back} src={cardBackSrc} alt="" />
      </div>
    </div>
  );
}

export default Card;
