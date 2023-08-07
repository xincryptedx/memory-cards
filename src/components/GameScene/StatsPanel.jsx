import styles from "./StatsPanel.module.css";

function StatsPanel() {
  return (
    <section className={styles.statsPanel}>
      <p className={styles.round}>
        Round: <span></span>
      </p>
      <p className={styles.score}>
        Score: <span></span>
      </p>
      <p className={styles.highScore}>
        High Score: <span></span>
      </p>
    </section>
  );
}

export default StatsPanel;
