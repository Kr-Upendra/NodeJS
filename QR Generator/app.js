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
    const filePath = "store/" + Date.now() + ".png";
    qrcode.toFile(filePath, data, {
      color: {
        dark: "#000000",
        light: "#0000",
      },
    });
    res.status(200).render("home", {
      title: "QR Code Generator",
      filePath: filePath,
      data: output,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      data: "something bad heppen!",
    });
  }
});

app.get("/download", (req, res) => {
  res.download(req.query.filePath);
});

app.all("*", (req, res) => {
  res.status(404).json({
    status: "failed",
    message: `The given url ${req.originalUrl} does not exist on this server`,
  });
});

module.exports = app;
