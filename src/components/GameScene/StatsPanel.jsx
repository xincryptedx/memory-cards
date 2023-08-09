/* eslint-disable react/prop-types */
import styles from "./StatsPanel.module.css";

function StatsPanel({ round, score, highScore }) {
  return (
    <section className={styles.statsPanel}>
      <p className={styles.round}>
        Round: <span>{round}</span>
      </p>
      <p className={styles.score}>
        Score: <span>{score}</span>
      </p>
      <p className={styles.highScore}>
        Best: <span>{highScore}</span>
      </p>
    </section>
  );
}

export default StatsPanel;
