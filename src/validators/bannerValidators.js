const { body } = require("express-validator");

exports.createBanner = () => {
  return [
    body("bannerImage", "Banner Image is required").isString(),
    body("status", "User status is required").isString(),
    body("restaurantId", "Restaurant ID is required").isNumeric(),
  ];
};
