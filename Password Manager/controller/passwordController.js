const Password = require("../models/passwordModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

exports.getAllPasswords = catchAsync(async (req, res, next) => {
  const passwords = await Password.find();
  res.status(200).json({
    status: "success",
    message: "Got All Passwords!",
    result: passwords.length,
    data: { passwords },
  });
});

exports.getPassword = catchAsync(async (req, res, next) => {
  const password = await Password.findById(req.params.id);
  if (!password)
    return next(new AppError("No password found with that ID", 404));

  res.status(200).json({
    status: "success",
    message: "Got All Passwords!",
    data: { password },
  });
});

exports.createPassword = catchAsync(async (req, res, next) => {
  const password = await Password.create(req.body);
  res.status(201).json({
    status: "success",
    message: "Password created successfully!",
    data: { password },
  });
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  const password = await Password.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!password)
    return next(new AppError("No password found with that ID", 404));

  res.status(200).json({
    status: "success",
    message: "Password Updated!",
    data: { password },
  });
});

exports.deletePassword = catchAsync(async (req, res, next) => {
  const password = await Password.findByIdAndDelete(req.params.id);

  if (!password)
    return next(new AppError("No password found with that ID", 404));

  res.status(204).json({
    status: "success",
    message: "Password Updated!",
  });
});
