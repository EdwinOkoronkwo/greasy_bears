const express = require("express");
const formData = require("express-form-data");
const morgan = require("morgan");
const { User } = require("../models");
var cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRoutes");
const cityRouter = require("./routes/cityRoutes");
const addressRouter = require("./routes/addressRoutes");
const restaurantRouter = require("./routes/restaurantRoutes");
const orderRouter = require("./routes/orderRoutes");
const cartRouter = require("./routes/cartRoutes");
const itemRouter = require("./routes/itemRoutes");
const itemCategoryRouter = require("./routes/itemCategoryRoutes");
const bannerRouter = require("./routes/bannerRoutes");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(cors());

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use((req, res, next) => {
  User.findByPk(1).then((user) => {
    req.user = user;
    next();
  });
});

/**
 * Options are the same as multiparty takes.
 * But there is a new option "autoClean" to clean all files in "uploadDir" folder after the response.
 * By default, it is "false".
//  */
// const options = {
//   //uploadDir: os.tmpdir(),
//   autoClean: true,
// };

// // parse data with connect-multiparty.
// app.use(formData.parse(options));
// //delete from the request all empty files (size == 0)
// app.use(formData.format());
// //change the file objects to fs.ReadStream
// app.use(formData.stream());
// //union the body and the files
// app.use(formData.union());

// Serving static files
//app.use("/images", express.static("uploads"));
app.use("/images", express.static("src/uploads"));

app.use("/api/users", userRouter);
app.use("/api/cities", cityRouter);
app.use("/api/addresses", addressRouter);
app.use("/api/restaurants", restaurantRouter);
app.use("/api/orders", orderRouter);
app.use("/api/carts", cartRouter);
app.use("/api/items", itemRouter);
app.use("/api/itemCategories", itemCategoryRouter);
// app.use("/api/orderItems", orderItemRouter);
// app.use("/api/cartItems", cartItemRouter);
// app.use("/api/userRestaurants", userRestaurantRouter);
app.use("/api/banners", bannerRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
