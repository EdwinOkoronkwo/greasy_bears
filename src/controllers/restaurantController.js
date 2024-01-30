const { Restaurant } = require("../../models");

exports.checkBody = (req, res, next) => {
  if (
    !req.body.uuid ||
    !req.body.userId ||
    !req.body.cityId ||
    !req.body.name ||
    !req.body.cover ||
    !req.body.rating ||
    !req.body.cuisines ||
    !req.body.deliveryTime ||
    !req.body.price ||
    !req.body.phone ||
    !req.body.email ||
    !req.body.isClose ||
    !req.body.description ||
    !req.body.openTime ||
    !req.body.closeTime ||
    !req.body.status ||
    !req.body.created_at ||
    !req.body.updated_at ||
    !req.body.latitude ||
    !req.body.longitude ||
    !req.body.address ||
    !req.body.location ||
    !req.body.totalRating ||
    !req.body.distance ||
    !req.body.address ||
    !req.body.houseNumber
  ) {
    return res.status(400).json({
      status: "fail",
      message: "Incomplete input data for creation of restaurant",
    });
  }
  next();
};
exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll();
    return res.json(restaurants);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

exports.getRestaurant = async (req, res) => {
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
    created_at,
    updated_at,
    latitude,
    longitude,
    address,
    location,
    totalRating,
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
    restaurant.created_at = created_at;
    restaurant.updated_at = updated_at;
    restaurant.latitude = latitude;
    restaurant.longitude = longitude;
    restaurant.address = address;
    restaurant.location = location;
    restaurant.totalRating = totalRating;
    restaurant.distance = distance;
    await restaurant.save();
    console.log(restaurant);
    return res.json(restaurant);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

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

exports.createRestaurant = async (req, res) => {
  const {
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
    created_at,
    updated_at,
    latitude,
    longitude,
    address,
    location,
    totalRating,
    distance,
  } = req.body;
  try {
    const restaurant = await Restaurant.create({
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
      created_at,
      updated_at,
      latitude,
      longitude,
      address,
      location,
      totalRating,
      distance,
    });
    return res.json(restaurant);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
