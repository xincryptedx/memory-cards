/* eslint-disable react/prop-types */
import styles from "./TitleScene.module.css";

function TitleScene({ setScene, difficulty, setDifficulty }) {
  return (
    <main className={styles.titleScene}>
      <h1 className={styles.title}>Memory Cards</h1>
      <button onClick={() => setScene("Game")} className={styles.playButton}>
        Play
      </button>
      <section className={styles.difficultySection}>
        <p>Select a Difficulty</p>
        <button
          onClick={() => setDifficulty(5)}
          className={difficulty === 5 ? styles.difficultySelected : ""}
        >
          Easy - 5 Cards
        </button>
        <button
          onClick={() => setDifficulty(10)}
          className={difficulty === 10 ? styles.difficultySelected : ""}
        >
          Medium - 10 Cards
        </button>
        <button
          onClick={() => setDifficulty(15)}
          className={difficulty === 15 ? styles.difficultySelected : ""}
        >
          Hard - 15 Cards
        </button>
      </section>
    </main>
  );
}

export default TitleScene;
