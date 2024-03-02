const { Address, User } = require("../../models");

//1. CREATE
exports.createAddress = async (req, res, next) => {
  const addressData = req.body;
  try {
    const newAddress = await req.user.createAddress(addressData);
    if (!newAddress) {
      return next(new AppError("New Address was not created", 500));
    }
    console.log(newAddress);
    return res.json(newAddress);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

//2. READ (Get All)
exports.getAddresses = async (req, res) => {
  try {
    const addresses = await req.user.getAddresses();
    return res.json(addresses);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

//3. READ (Get One)
exports.getAddress = async (req, res) => {
  const addressId = req.params.addressId;
  try {
    const address = await req.user.getAddresses({
      where: { id: addressId },
    })[0];
    return res.json(address);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

// 4. UPDATE
exports.updateAddress = async (req, res) => {
  const id = parseInt(req.params.id);
  const { userId, title, landmark, address, houseNumber, lat, lng } = req.body;
  try {
    const data = await Address.findOne({
      where: { id },
    });
    data.title = title;
    data.userId = userId;
    data.landmark = landmark;
    data.address = address;
    data.houseNumber = houseNumber;
    data.lat = lat;
    data.lng = lng;
    await data.save();
    console.log("updated address from server", data);
    return res.json(data);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

// 5. DELETE
exports.deleteAddress = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const address = await Address.findOne({
      where: { id },
    });
    await address.destroy();
    return res.json({ message: "Address deleted!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////// OLD CODE ///////////////////////////////////////////////////////////

// exports.createAddress = async (req, res) => {
//   const data = req.body;
//   console.log("data from create address: ", data);
//   const userId = req.user.id;
//   console.log("userId from create address", userId);
//   //const userId = req.user.id;

//   try {
//     let addressData = {
//       userId: userId,
//       title: data.title,
//       landmark: data.landmark,
//       address: data.address,
//       houseNumber: data.houseNumber,
//       lat: data.lat,
//       lng: data.lng,
//     };

//     const newAddress = await Address.create(addressData);
//     return res.json(newAddress);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Something went wrong" });
//   }
// };
// // exports.createAddress = async (req, res) => {
// //   //const data = req.body;
// //   const userId = req.user.id;
// //   console.log("userId from create address", userId);
// //   const { title, landmark, address, houseNumber, lat, lng } = req.body;
// //   try {
// //     const data = await Address.create({
// //       userId,
// //       title,
// //       landmark,
// //       address,
// //       houseNumber,
// //       lat,
// //       lng,
// //     });
// //     console.log("data from create address", data);
// //     return res.json(data);
// //   } catch (err) {
// //     console.log(err);
// //     return res.status(500).json({ error: "Something went wrong" });
// //   }
// // };

// getUser = async (req, res) => {
//   const id = parseInt(req.params.id);
//   try {
//     const user = await User.findOne({
//       where: {
//         id,
//       },
//     });
//     return res.json(user);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Something went wrong!" });
//   }
// };

// exports.getUserLimitedAddress = async (req, res) => {
//   //const id = parseInt(req.params.id);
//   const userId = parseInt(req.body.userId);

//   try {
//     // const user = await User.findOne({
//     //   where: {
//     //     id,
//     //   },
//     // });
//     // const userId = user.id;
//     const limit = req.query.limit;
//     const addresses = await Address.find({ userId }).limit(limit);
//     res.send(addresses);
//   } catch (e) {
//     console.log(e);
//     return res.status(500).json({ error: "Something went wrong" });
//   }
// };

// exports.getUserLimitedAddresses = async (req, res) => {
//   try {
//     // const id = parseInt(req.params.id);
//     const userId = parseInt(req.body.userId);
//     // const user = await User.findOne({
//     //   where: {
//     //     id,
//     //   },
//     // });
//     // const userId = user.id;
//     const limit = req.query.limit;
//     const addresses = await Address.find({ userId }).limit(limit);
//     res.send(addresses);
//   } catch (e) {
//     console.log(e);
//     return res.status(500).json({ error: "Something went wrong" });
//   }
// };

// exports.getAddressById = async (req, res) => {
//   //const id = parseInt(req.params.id);
//   try {
//     // const user = await User.findOne({
//     //   where: {
//     //     id,
//     //   },
//     // });
//     // const userId = user.id;
//     const userId = parseInt(req.body.userId);
//     const address = await Address.findOne({ userId, id });

//     res.send(address);
//   } catch (e) {
//     console.log(e);
//     return res.status(500).json({ error: "Something went wrong" });
//   }
// };

// exports.getUserAddresses = async (req, res) => {
//   // const id = parseInt(req.params.id);
//   const userId = parseInt(req.body.userId);
//   const perPage = 5;
//   const currentPage = parseInt(req.query.page) || 1;
//   const prevPage = currentPage === 1 ? null : currentPage - 1;
//   let nextPage = currentPage + 1;
//   const numSkip = currentPage * perPage - perPage;

//   try {
//     // const user = await User.findOne({
//     //   where: {
//     //     id,
//     //   },
//     // });
//     // const userId = user.id;
//     const addressDocCount = await Address.countDocuments({ userId });
//     const totalPages = Math.ceil(addressDocCount / perPage);
//     if (totalPages === 0 || totalPages === currentPage) {
//       nextPage = null;
//     }
//     if (totalPages < currentPage) {
//       throw "No more Addresses available";
//     }
//     const addresses = await Address.find({
//       userId,
//     })
//       .skip(numSkip)
//       .limit(perPage);
//     // res.send(addresses);
//     res.json({
//       addresses,
//       perPage,
//       currentPage,
//       prevPage,
//       nextPage,
//       totalPages,
//     });
//   } catch (e) {
//     console.log(e);
//     return res.status(500).json({ error: "Something went wrong" });
//   }
// };

// exports.checkExistAddress = async (req, res) => {
//   // const id = parseInt(req.params.id);

//   try {
//     // const user = await User.findOne({
//     //   where: {
//     //     id,
//     //   },
//     // });
//     const userId = parseInt(req.body.userId);
//     // const userId = user.id;
//     const data = req.query;
//     // const address = await Address.findOne({
//     //   where: {
//     //     userId,
//     //     lat: data.lat,
//     //     lng: data.lng,
//     //   },
//     // });
//     const address = await Address.findAll({
//       where: {
//         lat: data.lat,
//         lng: data.lng,
//       },
//     });
//     res.send(address);
//   } catch (e) {
//     console.log(e);
//     return res.status(500).json({ error: "Something went wrong" });
//   }
// };

// exports.getAllOrdersByUser = async (req, res) => {
//   const userId = req.user.id;
//   console.log("userId from ordersByUser", userId);
//   try {
//     // const orders = await Order.findAll();
//     const orders = await Order.findAll({
//       where: { userId },
//       // include: "Restaurant",
//       include: [
//         {
//           model: Item,
//           attributes: ["name"],
//           through: { attributes: [] }, // <= Add this line.
//         },
//         "Restaurant",
//       ],
//     });
//     return res.json(orders);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Something went wrong!" });
//   }
// };

// exports.getAllAddressesByUser = async (req, res) => {
//   const userId = req.user.id;
//   try {
//     const addresses = await Address.findAll({
//       where: { userId },
//     });
//     return res.json(addresses);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Something went wrong!" });
//   }
// };

// exports.getAddress = async (req, res) => {
//   const id = parseInt(req.params.id);
//   try {
//     const address = await Address.findOne({
//       where: {
//         id,
//       },
//     });
//     return res.json(address);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Something went wrong!" });
//   }
// };

// exports.getAllAddresses = async (req, res) => {
//   try {
//     const addresses = await Address.findAll();
//     return res.json(addresses);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Something went wrong!" });
//   }
// };

// exports.checkBody = (req, res, next) => {
//   if (
//     !req.body.name ||
//     !req.body.lat ||
//     !req.body.lng ||
//     !req.body.status ||
//     !req.body.userId ||
//     !req.body.landmark ||
//     !req.body.address ||
//     !req.body.houseNumber
//   ) {
//     return res.status(400).json({
//       status: "fail",
//       message:
//         "Missing or lat or lng or status or address or userId or landmark or house number",
//     });
//   }
//   next();
// };

// exports.createAddress = async (req, res) => {
//   const data = req.body;
//   console.log("data from create address: ", data);
//   const userId = req.user.id;
//   console.log("userId from create address", userId);
//   //const userId = req.user.id;

//   try {
//     let addressData = {
//       userId: userId,
//       title: data.title,
//       landmark: data.landmark,
//       address: data.address,
//       houseNumber: data.houseNumber,
//       lat: data.lat,
//       lng: data.lng,
//     };

//     const newAddress = await Address.create(addressData);
//     return res.json(newAddress);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Something went wrong" });
//   }
// };
