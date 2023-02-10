const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const lineRoute = require("./route/lineRoute");
const app = express();

app.use(express.json());
app.use(morgan("short"));
app.use(express.static("public"));
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("home", {
    title: "Home page | line a site to submit Ojha sir's thought",
  });
});

app.get("/thankyou", (req, res) => {
  res.render("thankyou", {
    title: "Line | Thankyou for sharing",
  });
});

app.use("/", lineRoute);

app.use("*", (req, res, next) => {
  res.status(404).json({
    status: "failed",
    message: "this route does not exist on this site",
    route: req.originalUrl,
  });
  next();
});

module.exports = app;
