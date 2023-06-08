const jwt = require("jsonwebtoken");

function validateAccessToken(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) {
    res.status(401).json({ Msg: "Token not found" });
  }
  try {
    const decoded = jwt.verify(token, process.env.VALIDATION_KEY);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ Msg: "Invalid token" });
  }
}

module.exports = {
  validateAccessToken,
};
