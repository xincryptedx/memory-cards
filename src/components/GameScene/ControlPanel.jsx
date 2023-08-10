/* eslint-disable react/prop-types */
import styles from "./ControlPanel.module.css";

function ControlPanel({ onNewGame, onQuit, setHelpModalOpen }) {
  return (
    <nav className={styles.controlPanel}>
      <button className={styles.newGameButton} onClick={onNewGame}>
        New Game
      </button>
      <button
        className={styles.helpButton}
        onClick={() => setHelpModalOpen(true)}
      >
        Help
      </button>
      <button className={styles.quitButton} onClick={onQuit}>
        Quit
      </button>
    </nav>
  );
}

export default ControlPanel;
