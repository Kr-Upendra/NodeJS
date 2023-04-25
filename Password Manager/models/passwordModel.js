const mongoose = require("mongoose");

const passwordSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
  },

  email: {
    type: String,
    trim: true,
    required: [true, "A password must have email!"],
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
