import styles from "./StatsPanel.module.css";

function StatsPanel() {
  return (
    <section className={styles.StatsPanel}>
      <p>
        Round: <span></span>
      </p>
      <p>
        Score: <span></span>
      </p>
      <p>
        High Score: <span></span>
      </p>
    </section>
  );
}

export default StatsPanel;
