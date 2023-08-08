/* eslint-disable react/prop-types */
import CardTable from "./CardTable";
import ControlPanel from "./ControlPanel";
import styles from "./GameScene.module.css";
import StatsPanel from "./StatsPanel";

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

function GameScene({
  difficulty,
  cards,
  setCards,
  score,
  setScore,
  round,
  setRound,
  setScene,
}) {
  const getRandomCards = () => {
    const cardCombinations = [];
    powers.map((power) => {
      suits.map((suit) => cardCombinations.push([power, suit]));
    });
    cardCombinations.sort(() => Math.random() - 0.5);

    for (let i = 0; i < difficulty; i += 1) {
      const [power, suit] = cardCombinations.pop();

      /* cards.push(<Card key={i} power={power} suit={suit}></Card>); */
      setCards((c) => [...c, { key: i, power: power, suit: suit }]);
    }
  };

  return (
    <main className={styles.gameScene}>
      <ControlPanel
        setCards={setCards}
        setScore={setScore}
        setRound={setRound}
        setScene={setScene}
      ></ControlPanel>
      <StatsPanel score={score} round={round}></StatsPanel>
      <CardTable
        difficulty={difficulty}
        cards={cards}
        setCards={setCards}
        setScore={setScore}
      ></CardTable>
    </main>
  );
}

export default GameScene;
