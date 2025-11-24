const bcrypt = require("bcryptjs");
const User = require("../model/model");
const { model } = require("mongoose");

const register = async (req, res) => {
  try {
    const newUserInfo = req.body; // user , email , password , role
    const newlyCreatedUser = await User.create(newUserInfo);

    res.status(201).json({
      success: true,
      message: "successfully added user info",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { register };
