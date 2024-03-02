const { query, body } = require("express-validator");
const { Cart, Item } = require("../../models");

exports.createCartItem = () => {
  return [
    body("cartId", "Cart Id is required")
      .isNumeric()
      .custom((cartId, { req }) => {
        return Cart.findByPk(cartId)
          .then((cart) => {
            if (cart) {
              return true;
            } else {
              // throw new Error('Restaurant doesnot exist');
              throw "Cart does not exist";
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
