const express = require("express");
const multer = require("multer");
const GlobalMiddleware = require("../middlewares/GlobalMiddleware");
const bannerValidator = require("../validators/bannerValidators");
const bannerController = require("../controllers/bannerController");
const authController = require("../controllers/authController");
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./src/uploads/bannerImages");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage });
router.param("id", GlobalMiddleware.checkID);

router.route("/").get(bannerController.getBanners).post(
  // authController.protect,
  upload.single("bannerImage"),
  // bannerValidator.createBanner(),
  bannerController.createBanner
);

router
  .route("/:id")
  .get(bannerController.getBanner)
  .patch(bannerController.updateBanner)
  .delete(bannerController.deleteBanner);

module.exports = router;
