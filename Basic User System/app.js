const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
require("pug");

const userRoute = require("./routes/userRoute");
const AppError = require("./utils/AppError");
const globalErrorHandler = require("./controllers/errorController");
const viewRouter = require("./routes/viewRoute");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.cookies);
  next();
});

app.use("/api/users/", userRoute);
app.use("/", viewRouter);

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
