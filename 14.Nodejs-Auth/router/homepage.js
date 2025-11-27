const express = require("express");
const authMiddleware = require("../middleware/homepage-middleware");
const homepageRouter = express.Router();
const { changePassword } = require("../controller/UserController");

homepageRouter.get("/welcome", authMiddleware, (req, res) => {
  const userInfo = req.userInfo;
  res.status(201).json({
    success: true,
    userInfo,
  });
});

homepageRouter.post("/change-password", authMiddleware, changePassword);

module.exports = homepageRouter;
