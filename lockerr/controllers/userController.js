import User from "../models/userModel.js";
import AppError from "../utils/AppError.js";
import asyncWrapper from "../utils/asyncWrapper.js";

const getAllUser = asyncWrapper(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    message: "Here are all users!",
    result: users.length,
    document: { users },
  });
});

const getUser = asyncWrapper(async (req, res, next) => {
  const user = await User.findById(req.params.id).populate("passwords");
  if (!user) return next(new AppError("User not found with given ID!"));

  res.status(200).json({
    status: "success",
    document: { user },
  });
});

export default { getAllUser, getUser };
