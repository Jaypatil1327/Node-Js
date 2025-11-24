const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["user", "admin"], // checks that its present or not
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
