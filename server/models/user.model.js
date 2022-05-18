const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserSchema = new mongoose.Schema(
{
  firstName: {
    type: String,
    required: [true, "A First Name is Required"],
  },
  lastName: {
    type: String,
    required: [true, "A Last Name is Required"],
  },
  email: {
    type: String,
    required: [true, "An Email Address is Required"],
    validate: {
      validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
      message: "Please enter a valid email",
    },
  },
  password: {
    type: String,
    required: [true, "A Password is Required"],
    minlength: [8, "Passwords Must be at Least 8 Characters"],
  },
}, 
{ timestamps: true }
);

UserSchema.virtual("confirmPassword")
.get(() => this.confirmPassword)
.set((value) => {
  this.confirmPassword = value;
});

UserSchema.pre("validate", function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Passwords must match");
  }
  next();
});

UserSchema.pre("save", function (next) { 
    bcrypt
    .hash(this.password, 10)
    .then((hash) => {
      this.password = hash;
      next();
    })
    .catch(err => {
      console.log("error saving hash");
      console.log(err);
    });
});

module.exports = mongoose.model("User", UserSchema);
