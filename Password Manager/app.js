const express = require("express");
const passwordRoute = require("./routes/passwordRoute");
const userRoute = require("./routes/userRoute");
const app = express();

app.use(express.json());

app.use("/api/v1/passwords/", passwordRoute);
app.use("/api/v1/users/", userRoute);

module.exports = app;
