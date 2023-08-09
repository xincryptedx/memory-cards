/* eslint-disable react/prop-types */
import CardTable from "./CardTable";
import ControlPanel from "./ControlPanel";
import styles from "./GameScene.module.css";
import StatsPanel from "./StatsPanel";

function GameScene({
  difficulty,
  cards,
  setCards,
  score,
  setScore,
  round,
  setRound,
  setScene,
  getRandomCards,
}) {
  return (
    <main className={styles.gameScene}>
      <ControlPanel
        setCards={setCards}
        setScore={setScore}
        setRound={setRound}
        setScene={setScene}
        getRandomCards={getRandomCards}
      ></ControlPanel>
      <StatsPanel score={score} round={round}></StatsPanel>
      <CardTable
        difficulty={difficulty}
        cards={cards}
        setScore={setScore}
      ></CardTable>
    </main>
  );
}

export default GameScene;
