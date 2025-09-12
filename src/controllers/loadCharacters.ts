import { createContacts } from "../utils/createContactsHS";
import { getCharacter } from "../utils/getCharacter";
import { getTotalCharacters } from "../utils/getTotalCharacters";
import { isPrime } from "../utils/isPrime";
import { Request, Response } from "express";

export const loadCharacter = async (
  req: Request,
  res: Response
): Promise<void> => {
  const totalCharacters = await getTotalCharacters();
  for (let i = 1; i < totalCharacters; i++) {
    if (isPrime(i)) {
      const character = await getCharacter(i);
      createContacts(character);
    }
  }
  res.send("Characters created");
};
