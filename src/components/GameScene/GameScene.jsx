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

const getRandomEntry = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

function GameScene() {
  return (
    <main className={styles.gameScene}>
      <ControlPanel></ControlPanel>
      <StatsPanel></StatsPanel>
      <CardTable></CardTable>
    </main>
  );
}

export default GameScene;
