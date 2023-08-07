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

function CardTable({ difficulty }) {
  const getRandomCards = () => {
    const cardCombinations = [];
    powers.map((power) => {
      suits.map((suit) => cardCombinations.push([power, suit]));
    });

    let cards = [];
    cardCombinations.sort(() => Math.random() - 0.5);

    for (let i = 0; i < difficulty; i += 1) {
      const [power, suit] = cardCombinations.pop();

      cards.push(<Card key={i} power={power} suit={suit}></Card>);
    }
    return cards;
  };

  return <section className={styles.cardTable}>{getRandomCards()}</section>;
}

export default CardTable;
