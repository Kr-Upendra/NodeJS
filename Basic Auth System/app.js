const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const pageRoute = require("./routes/pageRoute");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("home", {
    status: "success",
    title: "Home page | Get my secret",
  });
});

app.use("/", pageRoute);

app.get("*", (req, res) => {
  res.status(404).json({
    status: "failed",
    message: `The url '${req.originalUrl}' does not exist on this site.`,
    statusCode: 404,
  });
});

module.exports = app;
