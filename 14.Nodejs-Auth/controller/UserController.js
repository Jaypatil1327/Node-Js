const bcrypt = require("bcryptjs");
const User = require("../model/model");
const { model } = require("mongoose");
const jwt = require("jsonwebtoken");
const { use } = require("react");

function genToken({ _id, email, user }) {
  const token = jwt.sign(
    {
      user,
      email,
      id: _id,
    },
    process.env.JWT_TOKEN,
    { expiresIn: "15m" }
  );
  console.log(token);
}
const register = async (req, res) => {
  try {
    const { user, email, password, role } = req.body; // user , email , password , role
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newlyCreatedUser = await User.create({
      user,
      email,
      password: hashedPassword,
      role: role || "user",
    });
    genToken(newlyCreatedUser);
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

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findCredentials = await User.findOne({ email });

    const hashedPassword = findCredentials.password;
    const isUserAuthenticated = await bcrypt.compare(password, hashedPassword);

    if (isUserAuthenticated) {
      genToken(findCredentials);
      res.status(201).json({
        success: true,
        message: "user authenticated successfully",
      });
    } else throw new Error("invalid credentials");
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { register, login };
