import axios from "axios";

export const getTotalCharacters = async (): Promise<number> => {
  try {
    const response = await axios
      .get("https://rickandmortyapi.com/api/character")
      .then((data) => {
        return data.data;
      });
    const data = response;
    return data.info.count;
  } catch (error) {
    console.error(`error: ${error}`);
    throw new Error();
  }
};
