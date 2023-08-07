/* eslint-disable react/prop-types */
import CardTable from "./CardTable";
import ControlPanel from "./ControlPanel";
import styles from "./GameScene.module.css";
import StatsPanel from "./StatsPanel";

function GameScene({ difficulty }) {
  return (
    <main className={styles.gameScene}>
      <ControlPanel></ControlPanel>
      <StatsPanel></StatsPanel>
      <CardTable difficulty={difficulty}></CardTable>
    </main>
  );
}

export default GameScene;
