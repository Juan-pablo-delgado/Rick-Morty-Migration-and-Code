import app from "./app.ts";

process.loadEnvFile();
const PORT = process.env.PORT || 2000;

app
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
