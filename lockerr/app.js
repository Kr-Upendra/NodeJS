import express from "express";
import morgan from "morgan";

import passwordRoute from "./routes/passwordRoute.js";
import AppError from "./utils/AppError.js";
import globalErrorHandler from "./controllers/errorController.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/passwords/", passwordRoute);

app.all("*", (req, res, next) => {
  next(
    new AppError(
      `Requested ${req.originalUrl} does not exist on this server!`,
      404
    )
  );
});

app.use(globalErrorHandler);

export default app;
