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
  faceUp,
}) {
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

  return (
    <div
      className={`${styles.card} ${faceUp ? styles.faceUp : ""}`}
      onClick={onChooseCard}
    >
      <div className={styles.cardInner}>
        <img className={styles.front} src={image} alt={name} />
        <img className={styles.back} src={cardBackSrc} alt="" />
      </div>
    </div>
  );
}

export default Card;
