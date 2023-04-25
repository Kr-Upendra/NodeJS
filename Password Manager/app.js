const express = require("express");
const morgan = require("morgan");
const app = express();

const AppError = require("./utils/AppError");
const globalErrorHandler = require("./controller/errorController");
const passwordRoute = require("./routes/passwordRoute");
const userRoute = require("./routes/userRoute");

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(express.json());

app.use("/api/v1/passwords/", passwordRoute);
app.use("/api/v1/users/", userRoute);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
