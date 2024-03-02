const express = require("express");
const GlobalMiddleware = require("../middlewares/GlobalMiddleware");
const cartValidator = require("../validators/cartValidators");
const cartController = require("../controllers/cartController");
const authController = require("../controllers/authController");

const router = express.Router();

router.param("id", GlobalMiddleware.checkID);

router.route("/").get(cartController.getCart).post(
  // authController.protect,
  //cartValidator.createCart(),
  cartController.createCart
);

//router.get("/cart", cartController.getCartPage);

router
  .route("/:id")
  .get(cartController.getCart)
  .patch(cartController.updateCart)
  .delete(cartController.postDeleteCartItem);

module.exports = router;
