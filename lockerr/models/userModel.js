import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      minlength: 4,
      maxlength: 14,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "Please provide an email!"],
      unique: true,
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    photo: {
      type: String,
      default: "user.png",
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    password: {
      type: String,
      required: [true, "Please provide a password!"],
      minlength: 6,
      select: false,
    },
    confirmPassword: {
      type: String,
      required: [true, "Please confirm your password!"],
      validate: {
        validator: function (el) {
          return el === this.password;
        },
        message: "Passwords are not same!",
      },
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

userSchema.virtual("passwords", {
  ref: "Password",
  foreignField: "user",
  localField: "_id",
});

userSchema.pre("save", async function (next) {
  if (!this.isModified) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  password
) {
  return await bcrypt.compare(candidatePassword, password);
};

const User = mongoose.model("User", userSchema);

export default User;
