const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: [true, "Username is required field!"],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Email is required field!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required field!"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
