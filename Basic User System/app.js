const express = require("express");
const morgan = require("morgan");

const userRoute = require("./routes/userRoute");
const AppError = require("./utils/AppError");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/users/", userRoute);

app.all("*", (req, res, next) => {
  next(
    new AppError(
      `requested url ${req.originalUrl} doesn't exist on this server!`,
      404
    )
  );
});

app.use(globalErrorHandler);

module.exports = app;
