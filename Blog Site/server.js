require("dotenv").config();
const app = require("./app");
const connection = require("./dbConnection/dbConnection");
const port = process.env.PORT || 5959;
const db = process.env.DATABASE_NAME;

connection.connect((err) => {
  if (err) return console.error("MYSQL CONNECTION ERROR!", err);
  console.log("MYSQL CONNECTED...");
});

connection.query(`USE ${db}`, (err) => {
  if (err) return console.error("connection problem occure!");
  console.log("DATABASE SELECTED!");
});

app.listen(port, () =>
  console.log(`server started at http://127.0.0.1:${port}`)
);
