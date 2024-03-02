const { Item, Restaurant, User, ItemCategory } = require("../../models");

// 1. CREATE
exports.createItem = async (req, res, next) => {
  const itemData = req.body;
  itemData.RestaurantId = req.body.restaurantId;
  itemData.ItemCategoryId = req.body.categoryId;
  try {
    if (req.file) {
      itemData.cover = req.file.filename;
    }
    const newItem = await req.user.createItem(itemData);
    if (!newItem) {
      return next(new AppError("New Item was not created", 500));
    }
    console.log(newItem);
    return res.json(newItem);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

// 2. READ (Get All)
exports.getItems = async (req, res) => {
  try {
    const items = await req.user.getItems({
      include: [
        { model: ItemCategory },
        { model: User },
        { model: Restaurant },
      ],
    });
    return res.json(items);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

// 3. READ (Get One)
exports.getItem = async (req, res) => {
  const itemId = req.params.id;
  try {
    const items = await req.user.getItems({
      where: { id: itemId },
      include: [
        { model: ItemCategory },
        { model: User },
        { model: Restaurant },
      ],
    });
    const item = items[0];
    return res.json(item);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

// 4. UPDATE
exports.updateItem = async (req, res) => {
  console.log("req.body.id", req.body.id);
  // const id = parseInt(req.params.id);
  const id = parseInt(req.body.id);
  const {
    restaurantId,
    cover,
    name,
    status,
    description,
    price,
    createdAt,
    updatedAt,
    isVeg,
    itemCategoryId,
  } = req.body;
  try {
    //const item = await req.user.getItems({ where: { id } });
    const item = await Item.findOne({ where: { id } });
    console.log("item: ", item);
    item.restaurantId = restaurantId;
    item.cover = cover;
    item.name = name;
    item.description = description;
    item.price = price;
    item.isVeg = isVeg;
    item.itemCategoryId = itemCategoryId;
    item.status = status;
    item.createdAt = createdAt;
    item.updatedAt = updatedAt;
    await item.save();
    console.log(item);
    return res.json(item);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

// 5. DELETE
exports.deleteItem = async (req, res) => {
  const itemId = req.body.itemId;
  try {
    const item = await Item.findByPk(itemId);
    await item.destroy();
    return res.json({ message: "Item deleted!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////// OLD CODE ///////////////////////////////////////////////////////////

// // exports.createItem = async (req, res, next) => {
// //   const restaurant = await Restaurant.findByPk(req.body.restaurantId[0]);
// //   const itemData = req.body;
// //   itemData.CategoryId = req.body.CategoryId;
// //   try {
// //     if (req.file) {
// //       itemData.cover = req.file.filename;
// //     }
// //     const newItem = await restaurant.createItem(itemData);
// //     if (!newItem) {
// //       return next(new AppError("New Item was not created", 500));
// //     }
// //     console.log(newItem);
// //     return res.json(newItem);
// //   } catch (err) {
// //     console.log(err);
// //     return res.status(500).json({ error: "Something went wrong" });
// //   }
// // };

// ////////////////////////////////////////////////////
// exports.getAddProductPage = (req, res) => {
//   ItemCategory.findAll({ attributes: ["id", "name"] })
//     .then((categories) => {
//       return res.json(categories);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// //////////////////////////////////////////////////////////////////////////////
// ///////////Leyla////////////////////////////////////////////////////////////
// exports.getItemHomePage = (req, res) => {
//   Item.findAll({
//     include: [{ model: ItemCategory }, { model: User }, { model: Restaurant }],
//   })
//     .then((items) => {
//       console.log(items);
//       return res.json(items);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// exports.getItemDetailsPage = (req, res) => {
//   const itemId = parseInt(req.params.id);
//   // const itemId = req.params.itemId;
//   Item.findOne(
//     { where: { id: itemId } },
//     {
//       include: [
//         { model: ItemCategory },
//         { model: User },
//         { model: Restaurant },
//       ],
//     }
//   )
//     .then((item) => {
//       console.log(item);
//       return res.json(item);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// exports.checkBody = (req, res, next) => {
//   if (
//     !req.body.restaurantId ||
//     !req.body.cover ||
//     !req.body.name ||
//     !req.body.status ||
//     !req.body.description ||
//     !req.body.price ||
//     !req.body.createdAt ||
//     !req.body.updatedAt ||
//     !req.body.isVeg ||
//     !req.body.itemCategoryId
//   ) {
//     return res.status(400).json({
//       status: "fail",
//       message: "One or more required input values are missing",
//     });
//   }
//   next();
// };

// exports.getAllItems = async (req, res) => {
//   // const user = await User.findByPk(req.user.id);
//   // console.log(user);
//   try {
//     const items = await Item.findAll({
//       include: [
//         { model: ItemCategory },
//         { model: User },
//         { model: Restaurant },
//       ],
//     });
//     console.log(items);
//     return res.json(items);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Something went wrong!" });
//   }
// };

// exports.getItem = async (req, res) => {
//   const id = parseInt(req.params.id);
//   try {
//     const item = await Item.findOne({
//       where: {
//         id,
//       },

//       include: [
//         { model: ItemCategory },
//         { model: User },
//         { model: Restaurant },
//       ],
//     });
//     return res.json(item);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Something went wrong!" });
//   }
// };
