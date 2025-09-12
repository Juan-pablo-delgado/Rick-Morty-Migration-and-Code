import app from "./app";
import { envVariables } from "./config/envVariables";

const { PORT } = envVariables;

app
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
