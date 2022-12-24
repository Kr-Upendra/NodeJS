const authController = require("../controller/authController");
const userController = require("../controller/userController");

const express = require("express");
const router = express.Router();

router.route("/signup").post(authController.signup);
router.route("/").get(userController.getAllUser);
router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
