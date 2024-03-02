const { Restaurant, City } = require("../../models");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

// 1. CREATE
exports.createRestaurant = async (req, res, next) => {
  console.log("req.body", req.body);
  //const cityId = req.body.cityId;
  const city = await City.findByPk(req.body.cityId);
  const restaurantData = req.body;
  try {
    if (req.file) {
      restaurantData.restaurantImage = req.file.filename;
    }
    const newRestaurant = await city.createRestaurant(restaurantData);
    if (!newRestaurant) {
      return next(new AppError("New Restaurant was not created", 500));
    }
    console.log(newRestaurant);
    return res.json(newRestaurant);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

// 2. READ (Get All)
exports.getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll();
    return res.json(restaurants);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

// exports.getRestaurants = async (req, res) => {
//   console.log(req.body);
//   const cityId = req.body.CityId;
//   console.log("cityId", cityId);
//   const city = await City.findByPk(cityId);
//   try {
//     const restaurants = await city.getRestaurants();
//     return res.json(restaurants);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Something went wrong!" });
//   }
// };

// 2. READ (Get One)
exports.getRestaurant = async (req, res) => {
  const restaurantId = req.params.bannerId;
  const cityId = req.body.CityId;
  const city = await City.findByPk(cityId);
  try {
    const restaurant = await city.getRestaurants({
      where: { id: restaurantId },
    })[0];
    return res.json(restaurant);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

// 3. READ Get One
exports.getRestaurant = async (req, res) => {
  //const id = req.body.id;
  console.log("req.params", req.params);

  const id = parseInt(req.params.id);
  try {
    const restaurant = await Restaurant.findOne({
      where: {
        id,
      },
    });
    return res.json(restaurant);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

// 4. UPDATE
exports.updateRestaurant = async (req, res) => {
  const id = parseInt(req.params.id);
  const {
    uuid,
    userId,
    cityId,
    name,
    cover,
    rating,
    cuisines,
    deliveryTime,
    price,
    phone,
    email,
    isClose,
    description,
    openTime,
    closeTime,
    status,
    createdAt,
    updatedAt,
    latitude,
    longitude,
    address,
    location,
    postalCode,
    distance,
  } = req.body;
  try {
    const restaurant = await Restaurant.findOne({
      where: { id },
    });
    restaurant.uuid = uuid;
    restaurant.userId = userId;
    restaurant.cityId = cityId;
    restaurant.name = name;
    restaurant.cover = cover;
    restaurant.rating = rating;
    restaurant.cuisines = cuisines;
    restaurant.deliveryTime = deliveryTime;
    restaurant.price = price;
    restaurant.phone = phone;
    restaurant.email = email;
    restaurant.isClose = isClose;
    restaurant.description = description;
    restaurant.openTime = openTime;
    restaurant.closeTime = closeTime;
    restaurant.status = status;
    restaurant.createdAt = createdAt;
    restaurant.updatedAt = updatedAt;
    restaurant.latitude = latitude;
    restaurant.longitude = longitude;
    restaurant.address = address;
    restaurant.location = location;
    restaurant.postalCode = postalCode;
    restaurant.distance = distance;
    await restaurant.save();
    console.log(restaurant);
    return res.json(restaurant);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

// 5. DELETE
exports.deleteRestaurant = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const restaurant = await Restaurant.findOne({
      where: { id },
    });
    await restaurant.destroy();
    return res.json({ message: "Restaurant deleted!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

// 2. READ (Get All)
exports.searchRestaurants = async (req, res) => {
  // console.log("req.body", req.body);
  const term = req.body.query;
  try {
    const restaurants = await Restaurant.findAll({
      where: {
        postalCode: term,
      },
    });
    return res.json(restaurants);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

////////////////////////////////////////////////////////////////////////////////
/////////////////  OLD CODE //////////////////////////////////////////////

// // exports.createRestaurant = async (req, res) => {
// //   const {
// //     userId,
// //     cityId,
// //     name,
// //     cover,
// //     rating,
// //     cuisines,
// //     deliveryTime,
// //     price,
// //     phone,
// //     email,
// //     isClose,
// //     description,
// //     openTime,
// //     closeTime,
// //     status,
// //     createdAt,
// //     updatedAt,
// //     latitude,
// //     longitude,
// //     address,
// //     location,
// //     totalRating,
// //     distance,
// //   } = req.body;
// //   try {
// //     const restaurant = await Restaurant.create({
// //       userId,
// //       cityId,
// //       name,
// //       cover,
// //       rating,
// //       cuisines,
// //       deliveryTime,
// //       price,
// //       phone,
// //       email,
// //       isClose,
// //       description,
// //       openTime,
// //       closeTime,
// //       status,
// //       createdAt,
// //       updatedAt,
// //       latitude,
// //       longitude,
// //       address,
// //       location,
// //       totalRating,
// //       distance,
// //     });
// //     return res.json(restaurant);
// //   } catch (err) {
// //     console.log(err);
// //     return res.status(500).json({ error: "Something went wrong" });
// //   }
// // };

// // exports.signup = catchAsync(async (req, res, next) => {
// //   const userData = req.body;
// //   userData.password = await bcrypt.hash(userData.password, 10);
// //   if (req.file) {
// //     userData.image = req.file.filename;
// //   }
// //   const newUser = await User.create(userData);
// //   if (!newUser) {
// //     return next(new AppError("Signup failed", 500));
// //   }
// //   createSendToken(newUser, 201, res);
// // });

// // exports.createRestaurant = async (req, res) => {

// //   const cover = req.file.filename;

// //   const {
// //     cityId,
// //     name,
// //     cuisines,
// //     deliveryTime,
// //     price,
// //     phone,
// //     email,
// //     description,
// //     openTime,
// //     closeTime,
// //     status,
// //     createdAt,
// //     updatedAt,
// //   } = req.body;

// //   try {
// //     const restaurant = await Restaurant.create({
// //       cityId,
// //       name,
// //       cover,
// //       cuisines,
// //       deliveryTime,
// //       price,
// //       phone,
// //       email,
// //       description,
// //       openTime,
// //       closeTime,
// //       status,
// //       createdAt,
// //       updatedAt,
// //     });
// //     console.log(restaurant);
// //     return res.json(restaurant);
// //   } catch (err) {
// //     console.log(err);
// //     return res.status(500).json({ error: "Something went wrong" });
// //   }
// // };

// exports.createRestaurant = async (req, res, next) => {
//   console.log(req.body);
//   const city = await City.findByPk(req.body.cityId);
//   console.log(city);
//   const restaurantData = req.body;
//   try {
//     if (req.file) {
//       restaurantData.cover = req.file.filename;
//     }
//     const newRestaurant = await city.createRestaurant(restaurantData);
//     if (!newRestaurant) {
//       return next(new AppError("New Restaurant was not created", 500));
//     }
//     console.log(newRestaurant);
//     return res.json(newRestaurant);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Something went wrong" });
//   }
// };

// // const restaurantData = req.body;

// // if (req.file) {
// //   restaurantData.cover = req.file.filename;
// // }

// // const {
// //   cover,

// //   cityId,
// //   name,
// //   cuisines,
// //   deliveryTime,
// //   price,
// //   phone,
// //   email,
// //   description,
// //   openTime,
// //   closeTime,
// //   status,
// //   createdAt,
// //   updatedAt,
// // } = restaurantData;

// // try {
// //   const restaurant = await Restaurant.create({
// //     cityId,
// //     name,
// //     cover,
// //     cuisines,
// //     deliveryTime,
// //     price,
// //     phone,
// //     email,
// //     description,
// //     openTime,
// //     closeTime,
// //     status,
// //     createdAt,
// //     updatedAt,
// //   });
// //   console.log(restaurant);
// //   return res.json(restaurant);
// // } catch (err) {
// //   console.log(err);
// //   return res.status(500).json({ error: "Something went wrong" });
// // }
// exports.nearbyRestaurants = async (req, res) => {
//   const data = req.query;
//   const latitude = data.lat;
//   const longitude = data.lng;
//   const distance = 5;

//   const haversine = `(
//       6371 * acos(
//           cos(radians(${latitude}))
//           * cos(radians(latitude))
//           * cos(radians(longitude) - radians(${longitude}))
//           + sin(radians(${latitude})) * sin(radians(latitude))
//       )
//   )`;
//   // const id = parseInt(req.params.id);
//   // console.log(id);

//   const restaurants = await Restaurant.findAll({
//     attributes: [[sequelize.literal(haversine), "distance"]],
//     where: {
//       status: 1,
//     },
//     order: sequelize.col("distance"),
//     having: sequelize.literal(`distance <= ${distance}`),
//     limit: 5,
//   });
//   return res.json(restaurants);
// };

// exports.checkBody = (req, res, next) => {
//   console.log(req.body);
//   if (
//     !req.body.cityId ||
//     !req.body.name ||
//     !req.body.cover ||
//     !req.body.cuisines ||
//     !req.body.deliveryTime ||
//     !req.body.price ||
//     !req.body.phone ||
//     !req.body.email ||
//     !req.body.description ||
//     !req.body.openTime ||
//     !req.body.closeTime ||
//     !req.body.status ||
//     !req.body.address
//   ) {
//     return res.status(400).json({
//       status: "fail",
//       message: "Incomplete input data for creation of restaurant",
//     });
//   }
//   next();
// };

// // 6. SEND RESPONSE
// const sendResponse = (data, statusCode, res) => {
//   res.status(statusCode).json({
//     status: "success",
//     statusCode,
//     result: data ? data.length : null,
//     data: {
//       data,
//     },
//   });
// };
