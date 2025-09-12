import axios from "axios";
export const getCharacter = async (id: number) => {
  try {
    const response = await axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((data) => {
        return data.data;
      });
    const data = response;
    return data;
  } catch (error) {
    console.error(`error: ${error}`);
    throw new Error();
  }
};
