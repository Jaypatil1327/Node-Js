const express = require("express");
const authMiddleware = require("../middleware/homepage-middleware");
const verifyAdmin = require("../middleware/verify-admin");
const adminRouter = express.Router();

adminRouter.get("/homepage", authMiddleware, verifyAdmin, (req, res) => {
  const isAdmin = req.isAdmin;
  if (isAdmin) {
    res.status(201).json({
      success: true,
      message: "login successful by admin",
    });
  } else {
    res.status(404).json({
      success: false,
      message: "not an admin contact organization for admin access",
    });
  }
});

module.exports = adminRouter;
