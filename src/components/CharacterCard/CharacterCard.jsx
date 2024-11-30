import React, { useContext, useState } from "react";
import styles from "./CharacterCard.module.css";
import { FavoritesContext } from "../../context/FavoritesContext"; 


const CharacterCard = ({ character }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const [notification, setNotification] = useState(""); // Estado para la notificación

  const isFavorite = favorites.some((fav) => fav.id === character.id);

  const handleToggleFavorite = () => {
    toggleFavorite(character);

   
    if (!isFavorite) {
      setNotification(`${character.name} added to Favorites!`);
    } else {
      setNotification(`${character.name} removed from Favorites!`);
    }

 
    setTimeout(() => {
      setNotification("");
    }, 2000);
  };

  return (
    <div className={styles.card}>
      {notification && <div className={styles.notification}>{notification}</div>}
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
          className={`${styles.favoriteButton} ${isFavorite ? styles.favorite : ""}`}
          onClick={handleToggleFavorite}
        >
          {isFavorite ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="red"
              className={styles.heartIcon}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.heartIcon}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default CharacterCard;
