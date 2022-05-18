const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

 const register = async (req, res) => {
     const { body } = req;
     console.log("gets here");
     res.json({ msg: "you got here"});
 };


 module.exports = {
    register
 }
