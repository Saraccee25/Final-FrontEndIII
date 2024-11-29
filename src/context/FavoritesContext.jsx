import React, { createContext, useState, useEffect } from "react";


export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);


  const toggleFavorite = (character) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === character.id)) {

        return prevFavorites.filter((fav) => fav.id !== character.id);
      } else {

        return [...prevFavorites, character];
      }
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
