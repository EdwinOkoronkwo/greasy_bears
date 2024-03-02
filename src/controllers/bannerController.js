const { Banner, Restaurant } = require("../../models");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// 1. CREATE
exports.createBanner = async (req, res, next) => {
  const restaurant = await Restaurant.findByPk(req.body.restaurantId);
  console.log(restaurant);
  const bannerData = req.body;
  try {
    if (req.file) {
      bannerData.bannerImage = req.file.filename;
    }
    const newBanner = await restaurant.createBanner(bannerData);
    if (!newBanner) {
      return next(new AppError("New Banner was not created", 500));
    }
    console.log(newBanner);
    return res.json(newBanner);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

// 2. READ (Get All)
exports.getBanners = catchAsync(async (req, res) => {
  const banners = await Banner.findAll({ include: "Restaurant" });
  if (!banners) {
    return next(new AppError("Something went wrong!", 500));
  }
  res.json(banners);
  //sendResponse(banners, 200, res);
});

// 2. READ (Get One)
exports.getBanner = catchAsync(async (req, res) => {
  const id = parseInt(req.params.id);
  const banner = await Banner.findOne({
    where: {
      id,
    },
  });
  if (!banner) {
    return next(new AppError("Something went wrong!", 500));
  }
  sendResponse(banner, 200, res);
});

// 4. UPDATE
exports.updateBanner = catchAsync(async (req, res) => {
  const id = parseInt(req.params.id);
  const { bannerImage, status } = req.body;

  const banner = await Banner.findOne({
    where: { id },
  });
  if (!banner) {
    return next(new AppError("Something went wrong!", 500));
  }
  banner.bannerImage = bannerImage;
  banner.status = status;
  banner.createdAt = createdAt;
  banner.updatedAt = updatedAt;
  await banner.save();
  sendResponse(banner, 200, res);
});

// 5. DELETE
exports.deleteBanner = catchAsync(async (req, res) => {
  const id = parseInt(req.params.id);
  const banner = await Banner.findOne({
    where: { id },
  });
  await banner.destroy();
  if (!banner) {
    return next(new AppError("Something went wrong!", 500));
  }
  sendResponse(banner, 204, res);
});

// 6. SEND RESPONSE
const sendResponse = (data, statusCode, res) => {
  res.status(statusCode).json({
    status: "success",
    statusCode,
    result: data ? data.length : null,
    data: {
      data,
    },
  });
};

// exports.createBanner = catchAsync(async (req, res) => {
//   // const bannerData = req.body;
//   // if (req.file) {
//   //   bannerData.bannerImage = req.file.filename;
//   // }
//   const path = req.file.filename;
//   console.log(path);
//   // try {
//   //   const banner = await new Banner({
//   //     banner: path,
//   //   }).save();
//   //   res.send(banner);
//   // } catch (e) {
//   //   next(e);
//   // }

//   const newBanner = await Banner.create({
//     banner: path,
//   });
//   if (!newBanner) {
//     return next(new AppError("Something went wrong", 500));
//   }
//   // const { status, restaurantId } = req.body;

//   // const newBanner = await Banner.create({
//   //   bannerImage,
//   //   status,
//   //   restaurantId,
//   // });
//   // if (!newBanner) {
//   //   return next(new AppError("Something went wrong!", 500));
//   // }
//   sendResponse(newBanner, 201, res);
// });

// exports.checkBody = (req, res, next) => {
//   if (!req.body.bannerImage || !req.body.status) {
//     return next(
//       new AppError("One or more required input values are missing", 400)
//     );
//   }
//   next();
// };

// const sendResponse = (data, statusCode, res) => {
//   res.status(statusCode).json({
//     status: "success",
//     statusCode,
//     result: data ? data.length : "Item no longer exists.",
//     data: {
//       data,
//     },
//   });
// };

// exports.getAllBanners = catchAsync(async (req, res) => {
//   const banners = await Banner.findAll();
//   if (!banners) {
//     return next(new AppError("Something went wrong!", 500));
//   }
//   res.json(banners);
//   //sendResponse(banners, 200, res);
// });

// exports.getBanner = catchAsync(async (req, res) => {
//   const id = parseInt(req.params.id);
//   const banner = await Banner.findOne({
//     where: {
//       id,
//     },
//   });
//   if (!banner) {
//     return next(new AppError("Something went wrong!", 500));
//   }
//   sendResponse(banner, 200, res);
// });

// exports.getBanners = async (req, res) => {
//   const restaurantId = req.body.RestaurantId;
//   const restaurant = await Restaurant.findByPk(restaurantId);
//   console.log(restaurant);
//   try {
//     const banners = await restaurant.getBanners();
//     return res.json(banners);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Something went wrong!" });
//   }
// };

// exports.getBanner = async (req, res) => {
//   const bannerId = req.params.bannerId;
//   const restaurantId = req.body.RestaurantId;
//   const restaurant = await Restaurant.findByPk(restaurantId);
//   try {
//     const banner = await restaurant.getBanners({ where: { id: bannerId } })[0];
//     return res.json(banner);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Something went wrong!" });
//   }
// };
