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
  const [cardCount, setCardCount] = useState(0);

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

  const onCardMount = () => {
    setCardCount((p) => p + 1);
  };

  const onCardDismount = () => {
    setCardCount((p) => p - 1);
  };

  useEffect(() => {
    if (isShuffling) {
      const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
      setCards(shuffledCards);
      setIsShufflling(false);
    }
    if (!isShuffling && cardCount >= difficulty) {
      setTimeout(() => {
        setFaceUp(true);
      }, cardFlipDelay);
    }
  }, [isShuffling, cards, setCards, cardCount, difficulty]);

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
          onCardMount={onCardMount}
          onCardDismount={onCardDismount}
        ></Card>
      ))}
    </section>
  );
}

export default CardTable;
