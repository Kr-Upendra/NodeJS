const path = require("path");
const express = require("express");
const router = require("./routes/appRoutes");
require("pug");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");

app.use("/", router);

module.exports = app;

