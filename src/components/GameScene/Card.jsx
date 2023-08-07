/* eslint-disable react/prop-types */
import styles from "./Card.module.css";

function Card({ power, suit }) {
  const name = `${power} of ${suit}`;

  return (
    <div className={styles.card}>
      <img src="" alt={name} />
    </div>
  );
}

export default Card;
