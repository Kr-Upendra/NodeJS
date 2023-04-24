const Password = require("../models/passwordModel");

exports.getAllPasswords = async (req, res) => {
  try {
    const passwords = await Password.find();
    res.status(200).json({
      status: "success",
      message: "Got All Passwords!",
      result: passwords.length,
      data: { passwords },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      error: err,
    });
  }
};

exports.getPassword = async (req, res) => {
  try {
    const password = await Password.findById(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Got All Passwords!",
      data: { password },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      error: err,
    });
  }
};

exports.createPassword = async (req, res) => {
  try {
    const password = await Password.create(req.body);
    res.status(201).json({
      status: "success",
      message: "Password created successfully!",
      data: { password },
    });
  } catch (err) {
    res.status(401).json({
      status: "failed",
      error: err,
    });
  }
};

exports.updatePassword = async (req, res) => {
  try {
    const password = await Password.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      message: "Password Updated!",
      data: { password },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      error: err,
    });
  }
};

exports.deletePassword = async (req, res) => {
  try {
    const password = await Password.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      message: "Password Updated!",
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      error: err,
    });
  }
};
