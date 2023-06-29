import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import mongoose from "mongoose";

const port = process.env.PORT || 3000;
const db = process.env.DATABASE;

mongoose
  .connect(db)
  .then(() => console.log("CONNECTED WITH MONGODB.."))
  .catch((err) => console.error("MONGO CONNECTION PROBLEM!", err));

app.listen(port, () => {
  console.log(`server started at http:127.0.0.1:${port}`);
});
