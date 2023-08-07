import CardTable from "./CardTable";
import ControlPanel from "./ControlPanel";
import styles from "./GameScene.module.css";
import StatsPanel from "./StatsPanel";

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
