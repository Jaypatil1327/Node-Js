function verifyAdmin(req, res, next) {
  console.log(req.userInfo);
  const { role } = req.userInfo;
  req.isAdmin = role === "admin" ? true : false;
  next();
}

module.exports = verifyAdmin;
