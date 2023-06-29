import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncWrapper from "../utils/asyncWrapper.js";

const createSignToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const signup = asyncWrapper(async (req, res, next) => {
  const user = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });

  const token = createSignToken(user._id);

  res.status(201).json({
    status: "success",
    message: "USER SIGNUP SUCCESSFULLY!",
    token,
  });
});

const login = asyncWrapper(async (req, res, next) => {
  res.status(201).json({
    status: "success",
    message: "YOU ARE LOGGED IN SUCCESSFULLY!",
  });
});

export default {
  signup,
  login,
};
