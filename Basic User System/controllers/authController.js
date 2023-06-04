const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  res.status(201).json({
    status: "success",
    message: "New user created!",
    document: { user: newUser },
  });
});

// exports.signup = async (req, res) => {
//     try {
//       const newUser = await User.create(req.body);
//       res.status(201).json({
//         status: "success",
//         message: "New user created!",
//         document: { user: newUser },
//       });
//     } catch (err) {
//       res.status(400).json({
//         status: "fail",
//         message: err.message,
//         error: err,
//       });
//     }
//   };
