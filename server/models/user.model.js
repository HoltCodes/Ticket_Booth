const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
  name: {
    type: String,
    require: [true, "name is required."],
    minlength: [ 3, "Name must be a minimum of 3 characters." ],
  },
  email: {
    type: String,
    required: [ true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  }
}, { timestamps: true })

const User = mongoose.model("User", UserSchema);

module.exports = User;