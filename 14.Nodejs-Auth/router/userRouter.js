const express = require("express");
const { register, login } = require("../controller/UserController");
const userRouter = express.Router();

userRouter.post("/register-user", register);
userRouter.post("/login-user", login);

module.exports = userRouter;
