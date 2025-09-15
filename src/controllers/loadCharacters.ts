import { createContacts } from "../utils/character/createContactsHS";
import { getCharacter } from "../utils/character/getCharacter";
import { getTotalCharacters } from "../utils/character/getTotalCharacters";
import { isPrime } from "../utils/isPrime";
import { Request, Response } from "express";
import { createLocation } from "../utils/location/createLocationHS";
import { getLocation } from "../utils/location/getLocation";

export const loadCharacter = async (
  req: Request,
  res: Response
): Promise<void> => {
  const totalCharacters = await getTotalCharacters();
  for (let i = 1; i < totalCharacters; i++) {
    if (isPrime(i)) {
      const character = await getCharacter(i);
      await createContacts(character);
      if (character.location.url) {
        const location = await getLocation(character.location.url);
        await createLocation(location);
      }
    }
  }
  res.send("Characters created");
};
