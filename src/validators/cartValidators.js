const { query, body } = require("express-validator");
const { Cart } = require("../../models");

exports.createCart = () => {
  return [
    body("userId", "UserId is required").isNumeric(),
    body("totalItems", "The total item is required").isNumeric(),
    body("grandTotal", "The grand total cost is required").isNumeric(),
    body("deliveryCharge", "Delivery charge type is required").isNumeric(),
    body("totalPrice", "Total Price is required").isNumeric(),
  ];
};
