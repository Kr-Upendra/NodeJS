import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import connectDB from "./db/connectWithDb.js";

const port = process.env.PORT || 3000;
const db = process.env.DATABASE;

const start = async () => {
  try {
    await connectDB(db);
    console.log(`server started at http://127.0.0.1:${port}`);
  } catch (err) {
    console.error(err);
  }
};

start();
