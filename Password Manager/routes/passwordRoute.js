const passwordController = require("../controller/passwordController");
const authController = require("../controller/authController");
const express = require("express");
const router = express.Router();

router
  .route("/")
  .get(authController.protect, passwordController.getAllPasswords)
  .post(passwordController.createPassword);

router
  .route("/:id")
  .get(passwordController.getPassword)
  .patch(passwordController.updatePassword)
  .delete(passwordController.deletePassword);

module.exports = router;
