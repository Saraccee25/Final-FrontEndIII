import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to the Rick and Morty Multiverse</h1>
        <p className={styles.description}>
          Explore infinite dimensions, meet bizarre characters, and embark on interdimensional adventures!
        </p>
      </div>
      <div className={styles.imageWrapper}>
        <img
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="Rick"
          className={`${styles.image} ${styles.rickImage}`}
        />
        <img
          src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          alt="Morty"
          className={`${styles.image} ${styles.mortyImage}`}
        />
      </div>
    </div>
  );
};

export default Home;
