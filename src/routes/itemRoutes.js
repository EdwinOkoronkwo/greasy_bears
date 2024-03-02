const express = require("express");
const multer = require("multer");
const GlobalMiddleware = require("../middlewares/GlobalMiddleware");
const itemValidator = require("../validators/itemValidators");
const itemController = require("../controllers/itemController");
const authController = require("../controllers/authController");
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./src/uploads/itemImages");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage });

router.param("id", GlobalMiddleware.checkID);

router.route("/").get(itemController.getItems).post(
  //  itemController.checkBody,
  // authController.protect,
  upload.single("cover"),
  //itemValidator.createItem(),
  itemController.createItem
);

router
  .route("/:id")
  .get(itemController.getItem)
  .patch(itemController.updateItem)
  .delete(itemController.deleteItem);

module.exports = router;
