import styles from "./TitleScene.module.css";

function TitleScene() {
  return (
    <main className={styles.titleScene}>
      <h1 className={styles.title}>Memory Cards</h1>
      <button className={styles.playButton}>Play</button>
      <section className={styles.difficultySection}>
        <p>Select a Difficulty</p>
        <button>Easy - 5 Cards</button>
        <button>Medium - 10 Cards</button>
        <button>Hard - 15 Cards</button>
      </section>
    </main>
  );
}

export default TitleScene;
