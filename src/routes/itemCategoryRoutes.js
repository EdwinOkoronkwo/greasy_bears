const express = require("express");
const GlobalMiddleware = require("../middlewares/GlobalMiddleware");
const itemCategoryValidator = require("../validators/itemCategoryValidators");
const itemCategoryController = require("../controllers/itemCategoryController");
const authController = require("../controllers/authController");
const router = express.Router();

router.param("id", GlobalMiddleware.checkID);

router.route("/").get(itemCategoryController.getItemCategories).post(
  // authController.protect,
  // itemCategoryValidator.createItemCategory(),
  // itemCategoryController.createItemCategory
  itemCategoryController.createItemCategory
);

router
  .route("/:id")
  .get(itemCategoryController.getItemCategory)
  .patch(itemCategoryController.updateItemCategory)
  .delete(itemCategoryController.deleteItemCategory);

module.exports = router;
