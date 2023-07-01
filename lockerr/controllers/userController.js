import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncWrapper from "../utils/asyncWrapper.js";
import AppError from "../utils/AppError.js";

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
  const { email, password } = req.body;

  if (!email || !password)
    return next(new AppError("Please provide email and password!", 400));

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password)))
    return next(new AppError("Incorrect email or password!", 400));

  const token = createSignToken(user._id);
  user.password = undefined;
  user.role = undefined;

  res.status(201).json({
    status: "success",
    message: "YOU ARE LOGGED IN SUCCESSFULLY!",
    token,
  });
});

export default {
  signup,
  login,
};
