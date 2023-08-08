/* eslint-disable react/prop-types */
import styles from "./ControlPanel.module.css";

function ControlPanel({
  setCards,
  setScore,
  setRound,
  setScene,
  getRandomCards,
}) {
  const onNewGame = () => {
    setScore(0);
    setRound(1);
    getRandomCards();
  };

  const onQuit = () => {
    setCards([]);
    setScore(0);
    setRound(1);
    setScene("Title");
  };

  return (
    <nav className={styles.controlPanel}>
      <button className={styles.newGameButton} onClick={onNewGame}>
        New Game
      </button>
      <button className={styles.quitButton} onClick={onQuit}>
        Quit
      </button>
    </nav>
  );
}

export default ControlPanel;
