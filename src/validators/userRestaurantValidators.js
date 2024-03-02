const { query, body } = require("express-validator");
const { User, Restaurant } = require("../../models");

exports.createUserRestaurant = () => {
  return [
    body("userId", "User Id is required")
      .isNumeric()
      .custom((userId, { req }) => {
        return User.findByPk(userId)
          .then((user) => {
            if (user) {
              return true;
            } else {
              // throw new Error('Restaurant doesnot exist');
              throw "User does not exist";
            }
          })
          .catch((e) => {
            throw new Error(e);
          });
      }),
    body("restaurantId", "Restaurant Id is required")
      .isNumeric()
      .custom((restaurantId, { req }) => {
        return Restaurant.findByPk(restaurantId)
          .then((restaurant) => {
            if (restaurant) {
              return true;
            } else {
              // throw new Error('Restaurant doesnot exist');
              throw "Restaurant does not exist";
            }
          })
          .catch((e) => {
            throw new Error(e);
          });
      }),
  ];
};
