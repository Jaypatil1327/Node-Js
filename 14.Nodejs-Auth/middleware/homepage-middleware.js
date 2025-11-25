const jwt = require("jsonwebtoken");
function authMiddleware(req, res, next) {
  try {
    const token = req.rawHeaders[1].split(" ");
    const decodedToken = jwt.verify(token[1], process.env.JWT_TOKEN);
    req.userInfo = decodedToken;
    next();
  } catch (e) {
    res.status(404).json({
      success: false,
      message: e.message,
    });
  }
}

module.exports = authMiddleware;
