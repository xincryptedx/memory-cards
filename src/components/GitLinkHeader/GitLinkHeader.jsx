import styles from "./GitLinkHeader.module.css";
import gitIcon from "../assets/github-mark.svg";
import doubleDownArrowIcon from "../assets/double-arrow-down.svg";
import { useState } from "react";

function AuthorHeader() {
  const [headerHover, setHeaderHover] = useState(false);
  const [gitHover, setGitHover] = useState(false);

  return (
    <header
      className={
        headerHover
          ? styles.headerHovering + " " + styles.authorHeader
          : styles.authorHeader
      }
      onMouseEnter={() => setHeaderHover(true)}
      onMouseLeave={() => setHeaderHover(false)}
      onTouchEnd={() => setHeaderHover((previous) => !previous)}
    >
      {" "}
      <p className={styles.authorP}>{gitHover ? "GitHub" : "xIncryptedx"}</p>
      <a
        className={styles.git}
        href="https://github.com/xincryptedx/cv-creator"
        onMouseEnter={() => setGitHover(true)}
        onMouseLeave={() => setGitHover(false)}
        onFocus={() => setHeaderHover(true)}
        onBlur={() => setHeaderHover(false)}
      >
        <img
          className={
            gitHover
              ? styles.gitIconHovering + " " + styles.gitIcon
              : styles.gitIcon
          }
          src={gitIcon}
          alt="Project GitHub repo"
        />
      </a>{" "}
      <img
        className={styles.downArrowIcon}
        src={doubleDownArrowIcon}
        alt=""
      ></img>
    </header>
  );
}

export default AuthorHeader;
