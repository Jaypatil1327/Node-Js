function verifyAdmin(req, res, next) {
  const { role } = req.userInfo;
  req.isAdmin = role === "admin" ? true : false;
  next();
}

module.exports = verifyAdmin;
