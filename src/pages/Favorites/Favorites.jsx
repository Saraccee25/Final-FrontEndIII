import React, { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import styles from "./Favorites.module.css"; 

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className={styles.favoritesList}>
      {favorites.length === 0 ? (
        <p>No favorites yet!</p>
      ) : (
        favorites.map((character) => (
          <CharacterCard
            key={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            species={character.species}
            gender={character.gender}
            character={character}
          />
        ))
      )}
    </div>
  );
};

export default Favorites;
