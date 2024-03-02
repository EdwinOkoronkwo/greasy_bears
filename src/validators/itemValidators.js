const { query, body } = require("express-validator");
const { User, Restaurant, ItemCategory } = require("../../models");

exports.createItem = () => {
  return [
    body("restaurantId", "Restaurant Id is required")
      .isString()
      .custom((restaurantId, { req }) => {
        return Restaurant.findByPk(restaurantId)
          .then((restaurant) => {
            if (restaurant) {
              return true;
            } else {
              // throw new Error('Restaurant doesnot exist');
              throw "Restaurant doesnot exist";
            }
          })
          .catch((e) => {
            throw new Error(e);
          });
      }),
    body("categoryId", "Category Id is required")
      .isString()
      .custom((itemCategoryId, { req }) => {
        return ItemCategory.findByPk(itemCategoryId)
          .then((itemCategory) => {
            if (itemCategory) {
              return true;
            } else {
              // throw new Error('Restaurant doesnot exist');
              throw "Category does not exist";
            }
          })
          .catch((e) => {
            throw new Error(e);
          });
      }),
    body("cover", "cover is required").isString(),
    body("price", "Item price is required").isNumeric(),
    body("status", "User status is required").isString(),
    body("description", "Description is required").isString(),
    body("isVeg", "isVeg is required").isBoolean(),
  ];
};
