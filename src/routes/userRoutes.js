const express = require("express");
const GlobalMiddleware = require("../middlewares/GlobalMiddleware");
const userValidator = require("../validators/userValidators");

const userController = require("../controllers/userController");

const router = express.Router();

router.param("id", GlobalMiddleware.checkID);

router
  .route("/")
  .get(userController.getAllUsers)
  .post(
    userController.checkBody,
    userValidator.createUser(),
    userController.createUser
  );

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
