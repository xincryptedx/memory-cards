/* eslint-disable react/prop-types */
import useCardImage from "../../code/useCardImage";
import styles from "./Card.module.css";

function Card({ power, suit }) {
  const name = `${power} of ${suit}`;

  const image = useCardImage(power, suit);

  return (
    <div className={styles.card}>
      <img src={image} alt={name} />
    </div>
  );
}

export default Card;
