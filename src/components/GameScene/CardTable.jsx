/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import styles from "./CardTable.module.css";
import Card from "./Card.jsx";

function CardTable({
  cards,
  setCards,
  cardBackSrc,
  difficulty,
  setScore,
  highScore,
  setHighScore,
  faceUp,
  setFaceUp,
  cardFlipDelay,
  chosenCards,
  setChosenCards,
  onNextRound,
  gameOver,
  setGameOver,
  setGameOverModalOpen,
}) {
  const [isShuffling, setIsShufflling] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [mountedCards, setMountedCards] = useState(0);

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
    if (!isShuffling && imagesLoaded && mountedCards === difficulty) {
      setTimeout(() => {
        setFaceUp(true);
      }, cardFlipDelay);
    }
  }, [
    isShuffling,
    cards,
    setCards,
    imagesLoaded,
    mountedCards,
    difficulty,
    setFaceUp,
    cardFlipDelay,
  ]);

  useEffect(() => {
    const imagePromises = Object.values(cards).map((card) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          resolve();
        };
        img.src = card.image;
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.error("Error loading images:", error);
        setImagesLoaded(false);
      });
  }, [cards]);

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
          highScore={highScore}
          setHighScore={setHighScore}
          chosenCards={chosenCards}
          setChosenCards={setChosenCards}
          handleEndOfTurn={handleEndOfTurn}
          gameOver={gameOver}
          setGameOver={setGameOver}
          setGameOverModalOpen={setGameOverModalOpen}
          faceUp={faceUp}
          setMountedCards={setMountedCards}
        ></Card>
      ))}
    </section>
  );
}

export default CardTable;
