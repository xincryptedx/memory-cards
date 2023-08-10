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
  faceUp,
  setFaceUp,
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
  }, [isShuffling, cards, setCards, imagesLoaded, mountedCards, difficulty]);

  useEffect(() => {
    const imagePromises = Object.values(cards).map((card) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          console.log("Image loaded:", img.naturalWidth);
          resolve();
        };
        img.src = card.image;
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        console.log("All images loaded");
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
