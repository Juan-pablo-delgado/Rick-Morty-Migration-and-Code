import axios from "axios";
//import { Location } from "../../interfaces/location";
export const getLocation = async (url: string): Promise<any> => {
  try {
    const response = await axios.get(url).then((data) => {
      return data.data;
    });
    const data = response;
    return data;
  } catch (error) {
    console.error(`error: ${error}`);
    throw new Error();
  }
};

//getLocation("https://rickandmortyapi.com/api/location/20");
//'Earth (Replacement Dimension)'
