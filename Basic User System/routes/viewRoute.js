const express = require("express");
const viewsController = require("../controllers/viewsController");
const router = express.Router();

router.get("/", viewsController.homePage);
router.get("/signup", viewsController.signupPage);
router.get("/login", viewsController.loginPage);

module.exports = router;
