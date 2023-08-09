/* eslint-disable react/prop-types */
import styles from "./CardTable.module.css";
import Card from "./Card.jsx";

function CardTable({
  cards,
  setCards,
  difficulty,
  setScore,
  chosenCards,
  setChosenCards,
  onNextRound,
  onGameOver,
}) {
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
          setScore={setScore}
          chosenCards={chosenCards}
          setChosenCards={setChosenCards}
          handleEndOfTurn={handleEndOfTurn}
          onGameOver={onGameOver}
        ></Card>
      ))}
    </section>
  );
}

export default CardTable;
