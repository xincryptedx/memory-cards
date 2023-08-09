/* eslint-disable react/prop-types */
import styles from "./Card.module.css";

function Card({
  key,
  power,
  suit,
  image,
  score,
  setScore,
  chosenCards,
  setChosenCards,
  difficulty,
  handleEndOfTurn,
}) {
  const name = `${power} of ${suit}`;

  const onChooseCard = () => {
    // Check if the card is in chosenCards
    if (chosenCards.includes(key)) {
      // End the game
    } else {
      setScore((p) => p + 1);
      setChosenCards((p) => [...p, key]);
      handleEndOfTurn();
    }
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={name} />
    </div>
  );
}

export default Card;
