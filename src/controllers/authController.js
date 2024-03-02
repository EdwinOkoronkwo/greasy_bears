const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const GlobalMiddleware = require("../middlewares/GlobalMiddleware");
const { User } = require("../../models");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

// 1. SIGN TOKEN
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// 2. SEND RESPONSE
const createSendToken = (user, statusCode, res) => {
  const token = signToken(user.id);
  user.confirmPassword = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

// 3. SIGNUP
exports.signup = catchAsync(async (req, res, next) => {
  const userData = req.body;
  userData.password = await bcrypt.hash(userData.password, 10);
  if (req.file) {
    userData.image = req.file.filename;
  }
  const newUser = await User.create(userData);
  if (!newUser) {
    return next(new AppError("Signup failed", 500));
  }
  createSendToken(newUser, 201, res);
});

// 4. LOGIN
exports.login = function (req, res, next) {
  const { email, password } = req.body;
  User.findOne({ where: { email } }).then((user) => {
    if (!user) {
      return next(new AppError("User not found", 404));
    }
    bcrypt.compare(password, user.password, (err, match) => {
      if (!match) {
        return next(new AppError("Authentication failed", 401));
      }
      createSendToken(user, 200, res);
    });
  });
};

// 5. PROTECT
exports.protect = async function (req, res, next) {
  let token = req.header("Authorization");
  if (token) {
    token = token.replace("Bearer ", "");
  }
  console.log("token from protect", token);
  if (!token) {
    return res.status(401).json("Access denied");
  }
  try {
    const decoded = await GlobalMiddleware.jwtVerify(token);
    req.user = decoded;
    console.log(req.user);
    next();
  } catch (error) {
    res.status(401).json("Invalid token");
  }
};

// 6. ADMIN USER
exports.admin = (req, res, next) => {
  const user = req.user;
  if (user.type !== "admin") {
    return next(
      new AppError("You do not have permission to perform this action", 403)
    );
  }
  next();
};

////////////////////////////////////////////////////////////////////////////////////////
///////////  OLD CODE ///////////////////////////////////////////////////////////////////

// const newUser = await User.create({
//   firstName: req.body.firstName,
//   lastName: req.body.lastName,
//   image: req.body.image,
//   phone: req.body.phone,
//   email: req.body.email,
//   type: req.body.type,
//   status: req.body.status,
//   password: req.body.password,
//   confirmPassword: req.body.confirmPassword,
//   createdAt: req.body.createdAt,
//   updatedAt: req.body.updatedAt,
// });

// exports.login = async (req, res, next) => {
//   const { email, password } = req.body;

//   // 1) Check if email and password exist
//   if (!email || !password) {
//     return next(new AppError("Please provide email and password!", 400));
//   }
//   // 2) Find user based on their email address
//   const user = await User.findOne({ where: { email } });
//   if (!user) {
//     return next(new AppError("User not found", 400));
//   }
//   console.log(password);
//   console.log(user.password);
//   const match = await bcrypt.compare(password, user.password);

//   if (match) {
//     return next(new AppError("Authentication failed", 401));
//   }
//   // 3) If everything ok, send token to client
//   createSendToken(user, 200, res);
// };

// const decoded = await jwt.verify(token, process.env.JWT_SECRET);
// req.userId = decoded.userId;
// console.log(req.userId);
// next();
