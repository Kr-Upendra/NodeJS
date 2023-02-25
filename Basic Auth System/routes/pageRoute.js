const express = require("express");
const pageController = require("../controller/pageController");
const authController = require("../controller/authController");
const router = express.Router();

router.route("/login").get(pageController.login);
router.route("/register").get(pageController.register);

router.route("/login").post(authController.login);
router.route("/register").post(authController.register);

module.exports = router;
