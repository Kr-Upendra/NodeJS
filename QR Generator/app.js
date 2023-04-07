const express = require("express");
const qrcode = require("qrcode");
require("pug");
const morgan = require("morgan");

const app = express();
app.use(morgan("short"));
app.set("view engine", "pug");
app.use(express.static("public"));

app.get("/home", (req, res) => {
  res.status(200).render("home", {
    title: "QR Code Generator",
  });
});

app.get("/generate", async (req, res) => {
  const data = req.query.url;
  try {
    const output = await qrcode.toDataURL(data);
    res.status(200).render("home", {
      title: "QR Code Generator",
      data: output,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      data: "something bad heppen!",
    });
  }
});

app.all("*", (req, res) => {
  res.status(404).json({
    status: "failed",
    message: `The given url ${req.originalUrl} does not exist on this server`,
  });
});

module.exports = app;
