import React, { useContext } from "react";
import styles from "./CharacterCard.module.css";
import { FavoritesContext } from "../../context/FavoritesContext"; 

const CharacterCard = ({ character }) => { 
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

 
  const isFavorite = favorites.some((fav) => fav.id === character.id);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={character.image} alt={character.name} className={styles.cardImage} />
        <div className={styles.status}>
          <span className={`${styles.statusIndicator} ${styles[character.status.toLowerCase()]}`}></span>
          {character.status}
        </div>
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.name}>{character.name}</h3>
        <p className={styles.gender}>Gender: {character.gender}</p>
        <p className={styles.species}>Species: {character.species}</p>
        <button
          className={styles.favoriteButton}
          onClick={() => toggleFavorite(character)}
        >
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
};

export default CharacterCard;
