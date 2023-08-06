/* eslint-disable react/prop-types */
import styles from "./TitleScene.module.css";

function TitleScene({ difficulty, setDifficulty }) {
  return (
    <main className={styles.titleScene}>
      <h1 className={styles.title}>Memory Cards</h1>
      <button className={styles.playButton}>Play</button>
      <section className={styles.difficultySection}>
        <p>Select a Difficulty</p>
        <button className={difficulty === 0 ? styles.difficultySelected : ""}>
          Easy - 5 Cards
        </button>
        <button className={difficulty === 1 ? styles.difficultySelected : ""}>
          Medium - 10 Cards
        </button>
        <button className={difficulty === 2 ? styles.difficultySelected : ""}>
          Hard - 15 Cards
        </button>
      </section>
    </main>
  );
}

export default TitleScene;
