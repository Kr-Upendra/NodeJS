const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const userRoute = require("./routes/userRoute");
require("dotenv").config();
const app = express();

app.use(morgan("tiny"));
app.use(express.json());
mongoose.set("strictQuery", false);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "server is running!",
  });
});

app.use("/auth", userRoute);
app.use("/api/users", userRoute);

module.exports = app;
