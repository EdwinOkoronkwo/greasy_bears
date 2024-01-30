const { query, body } = require("express-validator");
const { User } = require("../../models");

exports.createRestaurant = () => {
  return [
    body("email", "Email is required")
      .isEmail()
      .custom((email, { req }) => {
        return User.findOne({ email })
          .then((user) => {
            if (user) {
              //throw new Error("User already exists");
              throw "User already exists";
            } else {
              return true;
            }
          })
          .catch((e) => {
            throw new Error(e);
          });
      }),
    body("address", "Address is required").isString(),
    body("rating", "Rating is required is required").isNumeric(),
    body("grandTotal", "The grand total cost is required").isNumeric(),
    body("totalRating", "Total Rating type is required").isNumeric(),
    body("price", "Price is required").isNumeric(),
    body("longitude", "Longitude is required").isNumeric(),
    body("latitude", "Latitude is required").isNumeric(),
    body("distance", "Distance is required").isNumeric(),
    body("status", "User status is required").isString(),
    body("paymentStatus", "Payment Status is required").isString(),
    body("paymentMode", "Payment mode is required").isString(),
    body("phone", "Phone is required").isString(),
    body("cover", "Cover is required").isString(),
    body("description", "Description is required").isString(),
    body("location", "Location is required").isString(),
    body("description", "Description is required").isString(),
    body("openTime", "Open Time is required").isString(),
    body("closeTime", "Close Time is required").isString(),
  ];
};
