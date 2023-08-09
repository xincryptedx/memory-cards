/* eslint-disable react/prop-types */
import styles from "./CardTable.module.css";
import Card from "./Card.jsx";
import { useState } from "react";

function CardTable({
  cards,
  difficulty,
  setScore,
  chosenCards,
  setChosenCards,
}) {
  const handleEndOfTurn = () => {
    if (chosenCards.length === difficulty) {
      // -Round is over so increment round state and start a new round
    } else {
      // -Else round is not over yet so randomize card positions on table
    }
  };

  return (
    <section className={styles.cardTable}>
      {cards.map((card) => (
        <Card
          key={card.code}
          code={card.code}
          power={card.value}
          suit={card.suit}
          image={card.image}
          setScore={setScore}
          chosenCards={chosenCards}
          setChosenCards={setChosenCards}
          handleEndOfTurn={handleEndOfTurn}
        ></Card>
      ))}
    </section>
  );
}

export default CardTable;
