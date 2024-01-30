const express = require("express");
var cors = require("cors");
const userRouter = require("./routes/userRoutes");
const cityRouter = require("./routes/cityRoutes");
const addressRouter = require("./routes/addressRoutes");
const restaurantRouter = require("./routes/restaurantRoutes");
const orderRouter = require("./routes/orderRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/users", userRouter);
app.use("/api/cities", cityRouter);
app.use("/api/addresses", addressRouter);
app.use("/api/restaurants", restaurantRouter);
app.use("/api/orders", orderRouter);

module.exports = app;
