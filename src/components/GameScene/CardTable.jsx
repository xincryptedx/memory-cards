/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./CardTable.module.css";
import Card from "./Card.jsx";

function CardTable({
  cards,
  setCards,
  cardBackSrc,
  difficulty,
  setScore,
  chosenCards,
  setChosenCards,
  onNextRound,
  onGameOver,
}) {
  const [faceUp, setFaceUp] = useState(false);

  const handleEndOfTurn = () => {
    if (chosenCards.length + 1 === difficulty) {
      onNextRound();
    } else {
      const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
      // Animate card flip
      setCards(shuffledCards);
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
          cardBackSrc={cardBackSrc}
          setScore={setScore}
          chosenCards={chosenCards}
          setChosenCards={setChosenCards}
          handleEndOfTurn={handleEndOfTurn}
          onGameOver={onGameOver}
          faceUp={faceUp}
        ></Card>
      ))}
    </section>
  );
}

export default CardTable;
