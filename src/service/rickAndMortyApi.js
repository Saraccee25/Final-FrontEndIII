export const API_BASE_URL = "https://rickandmortyapi.com/api";

export const getAllCharacters = async () => {
    const response = await fetch(API_BASE_URL + "/character");
    if (!response.ok) throw new Error("Failed to fetch characters");
    return await response.json();
  };
  
  export const getCharacterById = async (id) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    if (!response.ok) throw new Error("Failed to fetch character by ID");
    return await response.json();
  };
  