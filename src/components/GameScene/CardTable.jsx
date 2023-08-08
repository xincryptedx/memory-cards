/* eslint-disable react/prop-types */
import styles from "./CardTable.module.css";
import Card from "./Card.jsx";

function CardTable({ cards }) {
  return (
    <section className={styles.cardTable}>
      {cards.map((card) => (
        <Card
          key={card.code}
          power={card.value}
          suit={card.suit}
          image={card.images.svg}
        ></Card>
      ))}
    </section>
  );
}

export default CardTable;
