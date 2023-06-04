const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

exports.getAllUser = catchAsync(async (req, res, next) => {
  const allUsers = await User.find();
  res.status(200).json({
    status: "success",
    users: allUsers.length,
    document: { users: allUsers },
  });
});
