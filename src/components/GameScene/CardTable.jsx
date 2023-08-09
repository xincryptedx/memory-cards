/* eslint-disable react/prop-types */
import styles from "./CardTable.module.css";
import Card from "./Card.jsx";
import { useState } from "react";

function CardTable({ cards }) {
  const [chosenCards, setChosenCards] = useState([]);

  return (
    <section className={styles.cardTable}>
      {cards.map((card) => (
        <Card
          key={card.code}
          power={card.value}
          suit={card.suit}
          image={card.image}
          chosenCards={chosenCards}
          setChosenCards={setChosenCards}
        ></Card>
      ))}
    </section>
  );
}

export default CardTable;
