const express = require("express");
const authMiddleware = require("../middleware/homepage-middleware");
const homepageRouter = express.Router();

homepageRouter.get("/welcome", authMiddleware, (req, res) => {
  const userInfo = req.userInfo;
  res.status(201).json({
    success: true,
    userInfo,
  });
});

module.exports = homepageRouter;
