const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "views");

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "server running successfully!",
  });
});

module.exports = app;
