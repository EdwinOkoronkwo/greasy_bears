const { query, body } = require("express-validator");
const { Restaurant } = require("../../models");

exports.createItemCategory = () => {
  return [
    body("restaurantId", "Restaurant Id is required")
      .isNumeric()
      .custom((restaurantId, { req }) => {
        return Restaurant.findByPk(restaurantId)
          .then((restaurant) => {
            if (restaurant) {
              return true;
            } else {
              throw "Restaurant does not exist";
            }
          })
          .catch((e) => {
            throw new Error(e);
          });
      }),

    body("name", "Item Category name is required").isString(),
  ];
};
