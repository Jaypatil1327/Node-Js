const bcrypt = require("bcryptjs");
const User = require("../model/model");
const { model } = require("mongoose");
const jwt = require("jsonwebtoken");
const { use } = require("react");

function genToken({ _id, email, user, role }) {
  const token = jwt.sign(
    {
      user,
      email,
      role,
      id: _id,
    },
    process.env.JWT_TOKEN,
    { expiresIn: "15m" }
  );
  return token;
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
    const token = genToken(newlyCreatedUser);
    res.status(201).json({
      success: true,
      message: "successfully added user info",
      access: token,
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
      const token = genToken(findCredentials);
      res.status(201).json({
        success: true,
        message: "user authenticated successfully",
        access: token,
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
