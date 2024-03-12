const express = require("express");
const multer = require("multer");
const GlobalMiddleware = require("../middlewares/GlobalMiddleware");
const userValidator = require("../validators/userValidators");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./src/uploads/userImages");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage });

router.param("id", GlobalMiddleware.checkID);

// AUTH
router.post("/signup", upload.single("profile_image"), authController.signup);
router.post("/login", authController.login);

// User
router.get("/profile", authController.protect, userController.profile);

router.route("/").get(userController.getUsers).post(
  // userController.checkBody,
  // userValidator.createUser(),
  userController.createUser
);

router.patch(
  "/updateProfile",
  // authController.protect,
  upload.single("profile_image"),
  // userValidator.verifyProfile(),
  userController.updateProfile
);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
