const passwordController = require("../controller/passwordController");
const express = require("express");
const router = express.Router();

router
  .route("/")
  .get(passwordController.getAllPasswords)
  .post(passwordController.createPassword);

router
  .route("/:id")
  .get(passwordController.getPassword)
  .patch(passwordController.updatePassword)
  .delete(passwordController.deletePassword);

module.exports = router;
