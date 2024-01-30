const { query, body } = require("express-validator");

exports.createAddress = () => {
  return [
    body("address", "Address is required").isString(),
    body("lat", "Latitude is required").isNumeric(),
    body("lng", "Longitude is required").isNumeric(),
    body("landmark", "landmark is required").isString(),
    body("houseNumber", "House number is required").isString(),
    body("title", "Title is required").isString(),
  ];
};
