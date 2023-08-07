import styles from "./ControlPanel.module.css";

function ControlPanel() {
  return (
    <nav className={styles.controlPanel}>
      <button className={styles.newGameButton}>New Game</button>
      <button className={styles.quitButton}>Quit</button>
    </nav>
  );
}

export default ControlPanel;
