import React, { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import styles from "./Favorites.module.css";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className={styles.favoritesPage}>
      <h1 className={styles.title}>Your Favorites</h1>
      <div className={styles.favoritesList}>
        {favorites.length === 0 ? (
          <p>No favorites yet!</p>
        ) : (
          favorites.map(({ id, name, status, gender, species, image }) => (
            <CharacterCard
              key={id}
              id={id}
              name={name}
              status={status}
              gender={gender}
              species={species}
              image={image}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
