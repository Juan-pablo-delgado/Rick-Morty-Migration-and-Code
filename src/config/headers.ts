import { envVariables } from "./envVariables";

const { API_KEY_HS } = envVariables;

export const headers = {
  Authorization: `Bearer ${API_KEY_HS}`,
};
