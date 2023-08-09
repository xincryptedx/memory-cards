/* eslint-disable react/prop-types */
import styles from "./Card.module.css";

function Card({
  code,
  power,
  suit,
  image,
  cardBackSrc,
  setScore,
  chosenCards,
  setChosenCards,
  handleEndOfTurn,
  onGameOver,
  gameOver,
  faceUp,
  incrementImageLoaded,
}) {
  const name = `${power} of ${suit}`;

  const onChooseCard = () => {
    // Check if the card is in chosenCards if face up and game not over
    if (chosenCards.includes(code) && !gameOver && faceUp) {
      onGameOver();
    } else if (!gameOver && faceUp) {
      setScore((p) => p + 1);
      setChosenCards((p) => [...p, code]);
      handleEndOfTurn();
    }
  };

  return (
    <div
      className={`${styles.card} ${faceUp ? styles.faceUp : ""}`}
      onClick={onChooseCard}
    >
      <div className={styles.cardInner}>
        <img
          className={styles.front}
          src={image}
          alt={name}
          onLoad={incrementImageLoaded}
        />
        <img
          className={styles.back}
          src={cardBackSrc}
          alt=""
          onLoad={incrementImageLoaded}
        />
      </div>
    </div>
  );
}

export default Card;
