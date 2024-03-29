import mongoose from "mongoose";
import crypto from "crypto";

const passwordSchema = new mongoose.Schema(
  {
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
      select: false,
    },
    description: {
      type: String,
      maxlength: 200,
    },
    iv: {
      type: String,
      select: false,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "A password must belong to an user!"],
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

passwordSchema.pre("save", function (next) {
  const secret = process.env.HASH_PASSWORD_KEY;
  const iv = Buffer.from(crypto.randomBytes(16));
  const cipher = crypto.createCipheriv("aes-256-ctr", Buffer.from(secret), iv);
  this.password = Buffer.concat([
    cipher.update(this.password),
    cipher.final(),
  ]).toString("hex");
  this.iv = iv.toString("hex");

  next();
});

// passwordSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: "user",
//     select: "-role -__v -__id",
//   });
//   next();
// });

const Password = mongoose.model("Password", passwordSchema);

export default Password;
