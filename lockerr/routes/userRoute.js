import userController from "../controllers/userController.js";
import authController from "../controllers/authController.js";
import express from "express";
const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.get(
  "/",
  authController.protectRoute,
  authController.restrictTo("admin"),
  userController.getAllUser
);

export default router;
