const mongoose = require("mongoose");
require("dotenv").config();

process.on("uncaughtException", (err) => {
  console.log("UNCOUGHT EXCEPTION! 🔥 Shutting down..");
  console.log(err.name, err.message);
  process.exit(1);
});

const app = require("./app");
const port = process.env.PORT || 3000;

const DB = process.env.MONGO_URI.replace("<password>", process.env.PASSWORD);

mongoose
  .connect(DB, { autoIndex: true })
  .then(() => console.log("Mongo Connected!"));

const server = app.listen(port, () =>
  console.log(`server started at http://127.0.0.1:${port}`)
);

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 🔥 Shutting down..");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
