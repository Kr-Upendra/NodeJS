import Password from "../models/passwordModel.js";

const getAllPassword = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "HERE ALL YOUR PASSWORDS!",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      error: err,
    });
  }
};

const getPassword = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "PASSWORD WITH GIVEN ID!",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      error: err,
    });
  }
};

const createPassword = async (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      message: "NEW PASSWORD CREATED!",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err,
    });
  }
};

const updatePassword = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "PASSWORD DETAILS UPDATED!",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      error: err,
    });
  }
};

const deletePassword = async (req, res) => {
  try {
    res.status(204).json({
      status: "success",
      message: "PASSWORD DETAILS DELETED!",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      error: err,
    });
  }
};

export default {
  getAllPassword,
  getPassword,
  createPassword,
  updatePassword,
  deletePassword,
};
