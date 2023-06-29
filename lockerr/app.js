import express from "express";
import morgan from "morgan";

import passwordRoute from "./routes/passwordRoute.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/passwords/", passwordRoute);

export default app;
