import mongoose from "mongoose";

const passwordSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 3,
    maxlength: 25,
  },
  email: {
    type: String,
  },
  website: {
    type: String,
    required: [true, "Please provide website name!"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password!"],
  },
  description: {
    type: String,
    maxlength: 200,
  },
});

const Password = mongoose.model("Password", passwordSchema);

export default Password;
