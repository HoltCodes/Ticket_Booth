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
}, { timestamps: true, });

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);

  this.password = await bcrypt.hash(this.password, salt);
  this.confirmPassword = await bcrypt.hash(this.confirmPassword, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;