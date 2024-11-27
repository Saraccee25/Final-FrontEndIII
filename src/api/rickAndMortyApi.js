export const getAllCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (!response.ok) throw new Error("Failed to fetch characters");
    return await response.json();
  };
  
  export const getCharacterById = async (id) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    if (!response.ok) throw new Error("Failed to fetch character by ID");
    return await response.json();
  };
  