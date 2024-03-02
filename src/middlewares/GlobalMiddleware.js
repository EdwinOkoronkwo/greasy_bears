const jwt = require("jsonwebtoken");

exports.checkID = (req, res, next, val) => {
  console.log(`User id is ${val}`);
  if (!req.params.id) {
    return res.status(404).json({
      status: "Fail",
      message: "Invalid ID",
    });
  }
  next();
};

exports.jwtVerify = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) reject(err);
      else if (!decoded) reject(new Error("User is not authorized."));
      else resolve(decoded);
    });
  });
};
