import { getTotalCharacters } from "../utils/utils.ts";

export const loadCharacter = async () => {
  const totalCharacters = await getTotalCharacters();
  console.log(totalCharacters);
};
