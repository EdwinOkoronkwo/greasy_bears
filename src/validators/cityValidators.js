const { query, body } = require("express-validator");

exports.createCity = () => {
  return [
    body("name", "Name is required").isString(),
    body("lat", "Latitude is required").isNumeric(),
    body("lng", "Longitude is required").isNumeric(),
    body("landmark", "landmark is required").isString(),
    body("status", "Status is required").isString(),
  ];
};
