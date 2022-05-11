const expressAsyncHandler = require("express-async-handler");
const res = require("express/lib/response");
const User = require("../models/user.model");

const matchPassword = require("../models/user.model");

const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password || !confirmPassword) {
    res.status(400);
    throw new Error("Please Enter all the Fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
  }

  const user = await User.create({
    name,
    email,
    password,
    confirmPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      confirmPassword: user.confirmPassword,
    });
  } else {
    res.status(400);
    throw new Error("Failed to create the user");
  }
});

const authUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      confirmPassword: user.confirmPassword,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

module.exports = { registerUser, authUser };