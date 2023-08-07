/* eslint-disable react/prop-types */
import styles from "./CardTable.module.css";
import Card from "./Card.jsx";

const powers = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];
const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

const getRandomEntry = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

function CardTable({ difficulty }) {
  const getRandomCards = () => {
    let cards = [];
    for (let i = 0; i < difficulty; i += 1) {
      cards.push(
        <Card
          key={i}
          power={getRandomEntry(powers)}
          suit={getRandomEntry(suits)}
        ></Card>
      );
    }
    return cards;
  };

  return <section className={styles.cardTable}>{getRandomCards()}</section>;
}

export default CardTable;
