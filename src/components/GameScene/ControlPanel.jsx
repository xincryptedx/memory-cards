import styles from "./ControlPanel.module.css";

function ControlPanel() {
  return (
    <nav className={styles.controlPanel}>
      <button>New Game</button>
      <button>Quit</button>
    </nav>
  );
}

export default ControlPanel;
