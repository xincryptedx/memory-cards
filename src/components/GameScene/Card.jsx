/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./Card.module.css";

function Card({
  code,
  power,
  suit,
  image,
  setScore,
  chosenCards,
  setChosenCards,
  handleEndOfTurn,
  onGameOver,
}) {
  const [mounted, setMounted] = useState(false);

  const name = `${power} of ${suit}`;

  const onChooseCard = () => {
    // Check if the card is in chosenCards
    if (chosenCards.includes(code)) {
      onGameOver();
    } else {
      setScore((p) => p + 1);
      setChosenCards((p) => [...p, code]);
      handleEndOfTurn();
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`${styles.card} ${mounted ? styles.faceUp : ""}`}
      onClick={onChooseCard}
    >
      <img src={image} alt={name} />
    </div>
  );
}

export default Card;
