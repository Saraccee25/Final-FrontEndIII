import React from "react";
import styles from "./CharacterCard.module.css";

const CharacterCard = ({ name, image, status, species }) => (
  <div className={styles.card}>
    <div className={styles.imageContainer}>
      <img src={image} alt={name} className={styles.cardImage} />
      <div className={styles.status}>
        <span className={`${styles.statusIndicator} ${styles[status.toLowerCase()]}`}></span>
        {status}
      </div>
    </div>
    <div className={styles.cardContent}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.species}>{species}</p>
    </div>
  </div>
);

export default CharacterCard;
