const { query, body } = require("express-validator");
const { User, Order, Item } = require("../../models");

exports.createOrderItem = () => {
  return [
    body("orderId", "Order Id is required")
      .isNumeric()
      .custom((orderId, { req }) => {
        return Order.findByPk(orderId)
          .then((order) => {
            if (order) {
              return true;
            } else {
              // throw new Error('Restaurant doesnot exist');
              throw "Order does not exist";
            }
          })
          .catch((e) => {
            throw new Error(e);
          });
      }),
    body("itemId", "Item Id is required")
      .isNumeric()
      .custom((itemId, { req }) => {
        return Item.findByPk(itemId)
          .then((item) => {
            if (item) {
              return true;
            } else {
              // throw new Error('Restaurant doesnot exist');
              throw "Item does not exist";
            }
          })
          .catch((e) => {
            throw new Error(e);
          });
      }),
    body("quantity", "Quantity is required").isNumeric(),
  ];
};
