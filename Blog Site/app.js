const express = require("express");
const morgan = require("morgan");

const blogRoute = require("./routes/blogRoute");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/localhostblogs/", blogRoute);

module.exports = app;
