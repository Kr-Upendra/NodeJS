import mongoose from "mongoose";
import crypto from "crypto";

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

passwordSchema.pre("save", function (next) {
  const secret = process.env.HASH_PASSWORD_KEY;
  this.password = crypto
    .createHmac("sha256", secret)
    .update(this.password)
    .digest("hex");
  next();
});

const Password = mongoose.model("Password", passwordSchema);

export default Password;
