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
}) {
  const handleEndOfTurn = () => {
    if (chosenCards.length === difficulty) {
      onNextRound();
    } else {
      const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
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
        ></Card>
      ))}
    </section>
  );
}

export default CardTable;
