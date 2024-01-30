const express = require("express");
const GlobalMiddleware = require("../middlewares/GlobalMiddleware");
const orderValidator = require("../validators/orderValidators");
const orderController = require("../controllers/orderController");
const router = express.Router();

router.param("id", GlobalMiddleware.checkID);

router
  .route("/")
  .get(orderController.getAllOrders)
  .post(
    orderController.checkBody,
    orderValidator.createOrder(),
    orderController.createOrder
  );

router
  .route("/:id")
  .get(orderController.getOrder)
  .patch(orderController.updateOrder)
  .delete(orderController.deleteOrder);

module.exports = router;
