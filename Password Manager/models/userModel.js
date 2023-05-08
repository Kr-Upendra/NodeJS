const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: [true, "Username is required field!"],
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: [true, "Email is required field!"],
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email!"],
  },
  photo: String,
  password: {
    type: String,
    required: [true, "Password provide a password!"],
    minLength: 8,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, "please confirm your password!"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not same!",
    },
  },
  passwordChangeAt: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changePasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangeAt) {
    console.log(this.passwordChangeAt, JWTTimestamp);
  }
  return false;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
