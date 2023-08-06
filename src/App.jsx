import { useState } from "react";
import GitLinkHeader from "./components/GitLinkHeader/GitLinkHeader";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <GitLinkHeader></GitLinkHeader>
    </div>
  );
}

export default App;
