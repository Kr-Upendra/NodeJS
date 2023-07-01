import authController from "../controllers/authController.js";
import passwordController from "./../controllers/passwordController.js";
import express from "express";
const router = express.Router();

router.use(authController.protectRoute);

router
  .route("/")
  .get(authController.restrictTo("user"), passwordController.getAllPassword)
  .post(authController.restrictTo("user"), passwordController.createPassword);

router
  .route("/:id")
  .get(authController.restrictTo("user"), passwordController.getPassword)
  .patch(authController.restrictTo("user"), passwordController.updatePassword)
  .delete(authController.restrictTo("user"), passwordController.deletePassword);

router.post(
  "/showpassword",
  authController.restrictTo("user"),
  passwordController.showPassword
);

export default router;
