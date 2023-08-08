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
}) {
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
