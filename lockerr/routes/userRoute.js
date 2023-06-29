import userController from "../controllers/userController.js";
import express from "express";
const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);

export default router;
