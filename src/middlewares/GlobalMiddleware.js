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
