/* eslint-disable react/prop-types */
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
    <div className={styles.card} onClick={onChooseCard}>
      <img src={image} alt={name} />
    </div>
  );
}

export default Card;
