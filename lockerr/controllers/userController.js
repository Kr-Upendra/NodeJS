import User from "../models/userModel.js";
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

export default { getAllUser };
