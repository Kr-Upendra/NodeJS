const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 5,
    maxlength: 10,
    required: [true, "Please provide an username!"],
    trim: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, "Please provide an email!"],
    unique: true,
    trim: true,
  },
  photo: {
    type: String,
    default: "/img/default.png",
  },
  password: {
    type: String,
    minlength: 6,
    maxlength: 20,
    required: [true, "Please provide a password!"],
  },
  confirmPassword: {
    type: String,
    required: [true, "Please confirm your password"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
