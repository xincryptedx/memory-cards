/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import styles from "./CardTable.module.css";
import Card from "./Card.jsx";

const cardFlipDelay = 500;

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
  gameOver,
}) {
  const [faceUp, setFaceUp] = useState(false);
  const [isShuffling, setIsShufflling] = useState(false);

  const handleEndOfTurn = () => {
    if (chosenCards.length + 1 === difficulty) {
      onNextRound();
    } else {
      setFaceUp(false);
      setTimeout(() => {
        setIsShufflling(true);
      }, cardFlipDelay);
    }
  };

  useEffect(() => {
    if (isShuffling) {
      const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
      setCards(shuffledCards);
      setIsShufflling(false);
    }
    if (!isShuffling) {
      setTimeout(() => {
        setFaceUp(true);
      }, cardFlipDelay);
    }
  }, [isShuffling, cards, setCards]);

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
          gameOver={gameOver}
          faceUp={faceUp}
        ></Card>
      ))}
    </section>
  );
}

export default CardTable;
