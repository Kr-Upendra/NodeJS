require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;

const DB = process.env.MONGO_URI.replace("<password>", process.env.PASSWORD);

mongoose
  .connect(DB)
  .then(() => console.log("Mongo Connected!"))
  .catch((error) => console.error("Mongo Failed!", error));

app.listen(port, () =>
  console.log(`server started at http://127.0.0.1:${port}`)
);
