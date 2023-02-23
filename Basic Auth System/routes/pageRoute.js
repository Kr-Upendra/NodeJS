const express = require("express");
const pageController = require("../controller/pageController");
const router = express.Router();

router.route("/login").get(pageController.login);
router.route("/register").get(pageController.register);

module.exports = router;
