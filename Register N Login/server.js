const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3000;

const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => console.log("mongo connected..."))
  .catch((err) => console.error("mongo connection failed...", err));

app.listen(port, () =>
  console.log(`server starts at http://localhost:${port}`)
);
