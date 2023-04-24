const mongoose = require("mongoose");

const passwordSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  sitename: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
  },
});

const Password = mongoose.model("Password", passwordSchema);

module.exports = Password;
