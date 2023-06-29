import Password from "../models/passwordModel.js";
import AppError from "../utils/AppError.js";
import asyncWrapper from "../utils/asyncWrapper.js";
import crypto from "crypto";

const getAllPassword = asyncWrapper(async (req, res, next) => {
  const passwords = await Password.find();
  res.status(200).json({
    status: "success",
    message: "HERE ALL YOUR PASSWORDS!",
    results: passwords.length,
    documents: { passwords },
  });
});

const getPassword = asyncWrapper(async (req, res, next) => {
  const password = await Password.findById(req.params.id);

  if (!password)
    return next(new AppError("Password with given ID not found!", 404));

  res.status(200).json({
    status: "success",
    message: "PASSWORD WITH GIVEN ID!",
    document: password,
  });
});

const createPassword = asyncWrapper(async (req, res, next) => {
  const password = await Password.create(req.body);

  res.status(201).json({
    status: "success",
    message: "NEW PASSWORD CREATED!",
    document: password,
  });
});

const updatePassword = asyncWrapper(async (req, res, next) => {
  const password = await Password.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!password)
    return next(new AppError("Password with given ID not found!", 404));

  res.status(200).json({
    status: "success",
    message: "PASSWORD DETAILS UPDATED!",
    document: password,
  });
});

const deletePassword = asyncWrapper(async (req, res, next) => {
  const password = await Password.findByIdAndDelete(req.params.id);

  if (!password)
    return next(new AppError("Password with given ID not found!", 404));

  res.status(204).json({
    status: "success",
    message: "PASSWORD DETAILS DELETED!",
  });
});

const showPassword = asyncWrapper(async (req, res, next) => {
  const { username } = req.body;
  const password = await Password.findOne({ username }).select("+password +iv");

  if (!password)
    return next(
      new AppError("Did not able to get password. Please try again lator!", 500)
    );

  const decipher = crypto.createDecipheriv(
    "aes-256-ctr",
    Buffer.from(process.env.HASH_PASSWORD_KEY),
    Buffer.from(password.iv, "hex")
  );

  const decryptedPassword = Buffer.concat([
    decipher.update(Buffer.from(password.password, "hex")),
    decipher.final(),
  ]);

  const realPassword = decryptedPassword.toString();

  res.status(200).json({
    status: "success",
    message: "HERE IS YOUR PASSWORD!",
    document: realPassword,
  });
});

export default {
  getAllPassword,
  getPassword,
  createPassword,
  updatePassword,
  deletePassword,
  showPassword,
};
