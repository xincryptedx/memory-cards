/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./Card.module.css";

function Card({ power, suit }) {
  const [image, setImage] = useState("");

  const name = `${power} of ${suit}`;

  useEffect(() => {
    const cardCode = `${power[0]}${suit[0]}`.toUpperCase();

    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?cards=${cardCode}`)
      .then((res) => res.json())
      .then((data) => {
        setImage(data.cards[0].image);
      });
  }, [power, suit]);

  return (
    <div className={styles.card}>
      <img src={image} alt={name} />
    </div>
  );
}

export default Card;
