const express = require("express");
const lineController = require("../controller/lineController");
const router = express.Router();

router
  .route("/api/line/")
  .get(lineController.getAllLines)
  .post(lineController.createLine);

module.exports = router;
