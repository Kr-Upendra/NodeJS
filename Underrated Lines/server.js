require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
mongoose.set("strictQuery", true);
const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => console.log("mongo connection succssfull..."))
  .catch((err) => {
    console.error("mongo connection failed...", err);
  });

app.listen(port, () => {
  console.log(`server started at domain http://127.0.0.1:${port}/`);
});
