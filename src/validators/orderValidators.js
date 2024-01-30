const { query, body } = require("express-validator");
const { User } = require("../../models");

exports.createOrder = () => {
  return [
    body("address", "Name is required").isString(),
    body("total", "The total cost is required").isNumeric(),
    body("grandTotal", "The grand total cost is required").isNumeric(),
    body("deliveryCharge", "Delivery charge type is required").isNumeric(),
    body("status", "User status is required").isString(),
    body("paymentStatus", "Payment Status is required").isString(),
    body("paymentMode", "Payment mode is required").isString(),
    body("phone", "Phone is required").isString(),
  ];
};
