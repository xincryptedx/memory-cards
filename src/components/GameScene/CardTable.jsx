/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
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
  const cardCount = useRef(0);

  const handleEndOfTurn = () => {
    if (chosenCards.length + 1 === difficulty) {
      onNextRound();
    } else {
      const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
      // Animate card flip
      setCards(shuffledCards);
    }
  };

  const onCardMount = () => {
    cardCount.current += 1;
  };

  useEffect(() => {
    if (cardCount.current >= difficulty) {
      setFaceUp(true);
    }
  }, [cardCount, difficulty]);

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
          onCardMount={onCardMount}
        ></Card>
      ))}
    </section>
  );
}

export default CardTable;
