const express = require("express");
const GlobalMiddleware = require("../middlewares/GlobalMiddleware");
const addressValidator = require("../validators/addressValidators");
const addressController = require("../controllers/addressController");

const router = express.Router();

router.param("id", GlobalMiddleware.checkID);

router
  .route("/")
  .get(addressController.getAllAddresses)
  .post(
    addressController.checkBody,
    addressValidator.createAddress(),
    addressController.createAddress
  );

router
  .route("/:id")
  .get(addressController.getAddress)
  .patch(addressController.updateAddress)
  .delete(addressController.deleteAddress);

module.exports = router;
