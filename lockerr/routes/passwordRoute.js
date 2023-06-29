import passwordController from "./../controllers/passwordController.js";
import express from "express";
const router = express.Router();

router
  .route("/")
  .get(passwordController.getAllPassword)
  .post(passwordController.createPassword);

router
  .route("/:id")
  .get(passwordController.getPassword)
  .patch(passwordController.updatePassword)
  .delete(passwordController.deletePassword);

router.post("/showpassword", passwordController.showPassword);

export default router;
