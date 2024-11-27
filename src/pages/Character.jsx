import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Character = () => {
  const { id } = useParams(); // Obtiene el parámetro dinámico de la URL
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        if (!response.ok) throw new Error("Failed to fetch character");
        const data = await response.json();
        setCharacter(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCharacter();
  }, [id]);

  if (error) return <p>Error: {error}</p>;
  if (!character) return <p>Loading...</p>;

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
    </div>
  );
};

export default Character;
