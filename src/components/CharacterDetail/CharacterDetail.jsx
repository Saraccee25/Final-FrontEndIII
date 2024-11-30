import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../../service/rickAndMortyApi";
import { FavoritesContext } from "../../context/FavoritesContext";
import styles from "./CharacterDetail.module.css";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const [notification, setNotification] = useState("");

  const isFavorite = favorites.some((fav) => fav.id === parseInt(id));

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true);
      try {
        const data = await getCharacterById(id);
        setCharacter(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  const handleToggleFavorite = () => {
    if (character) {
      toggleFavorite(character);

      setNotification(
        isFavorite
          ? `${character.name} removed from Favorites!`
          : `${character.name} added to Favorites!`
      );

      setTimeout(() => {
        setNotification("");
      }, 2000);
    }
  };

  if (loading) {
    return <p className={styles.loading}>Loading...</p>;
  }

  if (error) {
    return <p className={styles.error}>Error: {error}</p>;
  }

  return (
    <div className={styles.container}>
      {notification && <div className={styles.notification}>{notification}</div>}
      <div className={styles.card}>
        <img src={character.image} alt={character.name} className={styles.image} />
        <h1 className={styles.name}>{character.name}</h1>
        <p className={styles.detail}><strong>Species:</strong> {character.species}</p>
        <p className={styles.detail}><strong>Status:</strong> {character.status}</p>
        <p className={styles.detail}><strong>Gender:</strong> {character.gender}</p>
        <p className={styles.detail}><strong>Origin:</strong> {character.origin.name}</p>
        <p className={styles.detail}><strong>Episodes:</strong> {character.episode.length}</p>
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

export default CharacterDetail;
