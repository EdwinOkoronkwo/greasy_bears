const express = require("express");
const multer = require("multer");
const GlobalMiddleware = require("../middlewares/GlobalMiddleware");
const restaurantValidator = require("../validators/restaurantValidators");
const restaurantController = require("../controllers/restaurantController");
const authController = require("../controllers/authController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./src/uploads/restaurantImages");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage });

const router = express.Router();

router.param("id", GlobalMiddleware.checkID);

router.get("/search", restaurantController.searchRestaurants);

//router.route("/search").get(restaurantController.searchRestaurants);

router.route("/").get(restaurantController.getRestaurants).post(
  //restaurantController.checkBody,
  // authController.protect,
  upload.single("cover"),
  // restaurantValidator.createRestaurant(),
  restaurantController.createRestaurant
);

router
  .route("/:id")
  .get(restaurantController.getRestaurant)
  .patch(restaurantController.updateRestaurant)
  .delete(restaurantController.deleteRestaurant);

module.exports = router;
