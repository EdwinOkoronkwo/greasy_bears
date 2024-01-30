const { query, body } = require("express-validator");
const { User } = require("../../models");

exports.createUser = () => {
  return [
    body("name", "Name is required").isString(),
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
    body("type", "User role type is required").isString(),
    body("status", "User status is required").isString(),
    body("phone", "Phone is required").isString(),
  ];
};
