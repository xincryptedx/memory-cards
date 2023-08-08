/* eslint-disable react/prop-types */
import styles from "./Card.module.css";

function Card({ power, suit, image }) {
  const name = `${power} of ${suit}`;

  return (
    <div className={styles.card}>
      <img src={image} alt={name} />
    </div>
  );
}

export default Card;
