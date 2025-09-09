import { https } from "../config/rateLimit";
import { Character } from "../interfaces/Character";

export const createContacts = (character: Character) => {
  const payload = {
    character_id: character.id,
    firstname: character.name,
    lastname: character.name,
    status_character: character.status,
    character_species: character.species,
    character_gender: character.gender,
  };
  try {
    https.post("https://api.hubapi.com/crm/v3/objects/contacts", { payload });
  } catch (error) {
    console.error(error);
  }
};
