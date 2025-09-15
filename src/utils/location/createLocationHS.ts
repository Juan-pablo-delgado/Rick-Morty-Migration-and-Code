import { https } from "../../config/rateLimit";
import { headers } from "../../config/headers";
import { Location } from "../../interfaces/location";

export const createLocation = async (location: Location) => {
  const properties = {
    location_id: location.id,
    name: location.name,
    location_type: location.type,
    dimension: location.dimension,
    creation_date: Math.floor(new Date(location.created).getTime() / 1000),
  };

  try {
    await https.post(
      "https://api.hubapi.com/crm/v3/objects/companies",
      { properties },
      { headers }
    );
    console.log(`Location: ${location.name} was created in HS`);
  } catch (error) {
    console.error(error);
  }
};
