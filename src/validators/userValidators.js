const { query, body } = require("express-validator");
const { User } = require("../../models");

exports.createUser = () => {
  return [
    body("firstName", "Name is required").isString(),
    body("lastName", "Last Name is required").isString(),
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

exports.verifyPhoneNumber = () => {
  return [body("phone", "Phone number is required").isString()];
};

exports.verifyProfile = () => {
  return [
    body("phone", "Phone is required").isString(),
    body("new_email", "Email is required")
      .isEmail()
      .custom((new_email, { req }) => {
        return User.findOne({ email })
          .then((user) => {
            if (user) {
              throw "User already with enetered email already exists, please provide a unique email id";
            } else {
              return true;
            }
          })
          .catch((e) => {
            throw new Error(e);
          });
      }),
    body("password", "Password is required").isAlphanumeric(),
  ];
};
