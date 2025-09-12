import { https } from "../config/rateLimit";
import { headers } from "../config/headers";
import { Character } from "../interfaces/character";

export const createContacts = (character: Character) => {
  const fullName = character.name.split(" ");
  const properties = {
    character_id: character.id,
    firstname: fullName[0],
    lastname: fullName.length > 1 ? fullName[1] : "",
    status_character: character.status,
    character_species: character.species,
    character_gender: character.gender,
    company: character.location.name,
  };

  try {
    https.post(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      { properties },
      { headers }
    );
    console.log(`Contact: ${character.name} was created in HS`);
  } catch (error) {
    console.error(error);
  }
};
