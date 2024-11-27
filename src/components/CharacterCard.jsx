import React from "react";
import styles from "../styles/CharacterCard.module.css"; // Asegúrate de tener un archivo de estilo para las tarjetas

const CharacterCard = ({ name, image, status, gender }) => (
  <div className={styles.card}>
    <h3>{name}</h3>
    <img src={image} alt={name} className={styles.cardImage} />
    <p><strong>Status:</strong> {status}</p>
    <p><strong>Gender:</strong> {gender}</p>
  </div>
);

export default CharacterCard;
