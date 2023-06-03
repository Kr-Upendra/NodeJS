require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");
const port = process.env.PORT || 4545;

const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(console.log("DATABASE CONNECTED!"))
  .catch((err) => console.error("DATABASE COULDN'T CONNECT!"));

app.listen(port, () => {
  console.log(`server started at http://127.0.0.1:${port}`);
});
