const express = require("express");
const GlobalMiddleware = require("../middlewares/GlobalMiddleware");
const cityController = require("../controllers/cityController");
const cityValidator = require("../validators/cityValidators");

const router = express.Router();

router.param("id", GlobalMiddleware.checkID);

router
  .route("/")
  .get(cityController.getAllCities)
  .post(
    cityController.checkBody,
    cityValidator.createCity(),
    cityController.createCity
  );

router
  .route("/:id")
  .get(cityController.getCity)
  .patch(cityController.updateCity)
  .delete(cityController.deleteCity);

module.exports = router;