const { ItemCategory, Restaurant, User } = require("../../models");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

// 1. CREATE
exports.createItemCategory = catchAsync(async (req, res) => {
  const { name, RestaurantId } = req.body;
  const newItemCategory = await req.user.createItemCategory({
    RestaurantId,
    name,
  });
  if (!newItemCategory) {
    return next(new AppError("Something went wrong!", 500));
  }
  sendResponse(newItemCategory, 201, res);
});

// 2. READ (Get All)
exports.getItemCategories = async (req, res) => {
  try {
    const itemCategories = await req.user.getItemCategories({
      include: [{ model: User }, { model: Restaurant }],
    });
    return res.json(itemCategories);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

//3. READ (Get One)
exports.getItemCategory = async (req, res) => {
  const itemCategoryId = req.params.itemCategory;
  try {
    const itemCategory = await req.user.getItemCategories({
      where: { id: itemCategoryId },
      include: [{ model: User }, { model: Restaurant }],
    })[0];
    return res.json(itemCategory);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

// 4. UPDATE
exports.updateItemCategory = catchAsync(async (req, res) => {
  const id = parseInt(req.params.id);
  const { restaurantId, name } = req.body;

  const itemCategory = await ItemCategory.findOne({
    where: { id },
  });
  if (!itemCategory) {
    return next(new AppError("Something went wrong!", 500));
  }
  itemCategory.restaurantId = restaurantId;
  itemCategory.name = name;
  itemCategory.createdAt = createdAt;
  itemCategory.updatedAt = updatedAt;
  await itemCategory.save();
  sendResponse(itemCategory, 200, res);
});

// 5. DELETE
exports.deleteItemCategory = catchAsync(async (req, res) => {
  const id = parseInt(req.params.id);
  const itemCategory = await ItemCategory.findOne({
    where: { id },
  });
  await itemCategory.destroy();
  if (!itemCategory) {
    return next(new AppError("Something went wrong!", 500));
  }
  sendResponse(itemCategory, 204, res);
});

// 6. Send Response
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

/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////// OLD CODE ///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////

// exports.postAddCategoryPage = (req, res) => {
//   const title = req.body.title;
//   const description = req.body.description;
//   ItemCategory.create({ title, description })
//     .then(() => {
//       res.redirect("/category");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// exports.getCategoryPage = (req, res) => {
//   ItemCategory.findAll().then((categories) => {
//     console.log("Item categories");
//     res.json(categories);
//   });
// };

// ///////////////////////////////////////////////////////////////////////////////
// //// Leyla ////////////////////////////////////////////////////////////
// exports.getItemCategoryPage = (req, res) => {
//   ItemCategory.findAll({
//     include: [{ model: User }, { model: Restaurant }],
//   }).then((itemCategories) => {
//     console.log(itemCategories);
//     res.json(itemCategories);
//   });
// };

// exports.getAddCategoryPage = (req, res) => {
//   const viewsData = {
//     pageTitle: "Add Category",
//   };

//   res.json(viewsData);
// };

// // console.log("req.user", req.user);
// // const user = await User.findByPk(req.user.id);
// // const { name, RestaurantId } = req.body;
// // const newItemCategory = await user.createItemCategory({
// //   RestaurantId,
// //   name,
// // });
// // if (!newItemCategory) {
// //   return next(new AppError("Something went wrong!", 500));
// // }
// // sendResponse(newItemCategory, 201, res);

// exports.checkBody = (req, res, next) => {
//   if (!req.body.RestaurantId || !req.body.name) {
//     return next(
//       new AppError("One or more required input values are missing", 400)
//     );
//   }
//   next();
// };

// exports.postAddCategoryPage = (req, res) => {
//   const { name, RestaurantId } = req.body;
//   req.user
//     .createItemCategory({
//       RestaurantId,
//       name,
//     })
//     .then((newItemCategory) => {
//       sendResponse(newItemCategory, 201, res);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// exports.getAllItemCategories = catchAsync(async (req, res) => {
//   const itemCategories = await ItemCategory.findAll({
//     include: [{ model: User }, { model: Restaurant }],
//   });
//   if (!itemCategories) {
//     return next(new AppError("Something went wrong!", 500));
//   }
//   console.log("Item categories");
//   res.json(itemCategories);
//   //sendResponse(itemCategories, 200, res);
// });

// exports.getItemCategories = catchAsync(async (req, res) => {
//   const id = parseInt(req.params.id);
//   const itemCategories = await ItemCategory.findAll({
//     include: [{ model: User }, { model: Restaurant }],
//   });
//   if (!itemCategories) {
//     return next(new AppError("Something went wrong!", 500));
//   }
//   console.log("Item categories");
//   res.json(itemCategories);
//   //sendResponse(itemCategories, 200, res);
// });

// exports.getItemCategory = catchAsync(async (req, res) => {
//   const id = parseInt(req.params.id);
//   const itemCategory = await ItemCategory.findOne({
//     where: {
//       id,
//     },
//   });
//   if (!itemCategory) {
//     return next(new AppError("Something went wrong!", 500));
//   }
//   sendResponse(itemCategory, 200, res);
// });
