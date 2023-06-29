import Password from "../models/passwordModel.js";

const getAllPassword = async (req, res) => {
  try {
    const passwords = await Password.find();
    res.status(200).json({
      status: "success",
      message: "HERE ALL YOUR PASSWORDS!",
      results: passwords.length,
      documents: { passwords },
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
    console.log(req.params.id);
    const password = await Password.findById(req.params.id);

    if (!password)
      return res.status(404).json({
        status: "fail",
        message: "Password with given ID not found!",
      });

    res.status(200).json({
      status: "success",
      message: "PASSWORD WITH GIVEN ID!",
      document: password,
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
    const password = await Password.create(req.body);

    res.status(201).json({
      status: "success",
      message: "NEW PASSWORD CREATED!",
      document: password,
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
    const password = await Password.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!password)
      return res.status(404).json({
        status: "fail",
        message: "Password with given ID not found!",
      });

    res.status(200).json({
      status: "success",
      message: "PASSWORD DETAILS UPDATED!",
      document: password,
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
    const password = await Password.findByIdAndUpdate(req.params.id);
    if (!password)
      return res.status(404).json({
        status: "fail",
        message: "Password with given ID not found!",
      });

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
