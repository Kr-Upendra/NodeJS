const express = require("express");
const viewsController = require("../controllers/viewsController");
const authController = require("../controllers/authController");
const router = express.Router();

router.use(authController.isLoggedIn);

router.get("/", viewsController.homePage);
router.get("/signup", viewsController.signupPage);
router.get("/login", viewsController.loginPage);
router.get("/user-info", authController.protect, viewsController.userInfoPage);

module.exports = router;
