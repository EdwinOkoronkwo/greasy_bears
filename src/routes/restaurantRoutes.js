const express = require("express");
const GlobalMiddleware = require("../middlewares/GlobalMiddleware");
const restaurantValidator = require("../validators/restaurantValidators");
const restaurantController = require("../controllers/restaurantController");

const router = express.Router();

router.param("id", GlobalMiddleware.checkID);

router
  .route("/")
  .get(restaurantController.getAllRestaurants)
  .post(
    restaurantController.checkBody,
    restaurantValidator.createRestaurant(),
    restaurantController.createRestaurant
  );

router
  .route("/:id")
  .get(restaurantController.getRestaurant)
  .patch(restaurantController.updateRestaurant)
  .delete(restaurantController.deleteRestaurant);

module.exports = router;
