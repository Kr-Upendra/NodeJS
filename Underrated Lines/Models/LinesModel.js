const mongoose = require("mongoose");

const lineSchema = new mongoose.Schema({
  lnumber: Number,
  line: {
    type: String,
    required: [true, "please provide a line"],
    trim: true,
  },
  addedby: {
    type: String,
    required: [true, "please tell your name!"],
    trim: true,
  },
});

const Line = mongoose.model("Line", lineSchema);
module.exports = Line;
