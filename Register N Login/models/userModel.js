const bcrypt = require("bcryptjs/dist/bcrypt");
const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "user must needs to provide their name!"],
    minlength: [5, "user name must be atleast 5 characters long!"],
    maxlength: [25, "user name must not be greater than 25 characters!"],
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    validate: [validator.isEmail, "Please provide a valid email!"],
    lowercase: true,
    trim: true,
    unique: [true, "email already exist!"],
  },
  username: {
    type: String,
    required: [true, "please provide an username!"],
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "please provide a password!"],
    trim: true,
    minlength: 6,
  },
  confirmPassword: {
    type: String,
    required: [true, "please confirm your password!"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "passwords are not the same!",
    },
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 14);
  this.confirmPassword = undefined;
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
