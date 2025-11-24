const express = require("express");
const { register } = require("../controller/UserController");
const userRouter = express.Router();

userRouter.post("/register-user", register);

module.exports = userRouter;
