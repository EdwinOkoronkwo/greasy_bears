const express = require("express");
const GlobalMiddleware = require("../middlewares/GlobalMiddleware");
const orderValidator = require("../validators/orderValidators");
const orderController = require("../controllers/orderController");
const authController = require("../controllers/authController");
const router = express.Router();

router.param("id", GlobalMiddleware.checkID);
router.route("/ordersPrice").get(orderController.getOrdersPrice);
router.route("/ordersQuantity").get(orderController.getOrdersQuantity);

router.route("/").get(orderController.getOrders).post(
  // authController.protect,
  //   orderValidator.createOrder(),
  orderController.createOrder
);

router
  .route("/:id")
  .get(orderController.getOrder)
  .patch(orderController.updateOrder)
  .delete(orderController.deleteOrder);

module.exports = router;
