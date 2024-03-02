const { Order, Restaurant, OrderItem, Item, User } = require("../../models");

// 1. CREATE
exports.createOrder = async (req, res, next) => {
  const restaurantId = req.body.restaurantId;
  let fetchedCart;
  try {
    const cart = await req.user.getCart();
    console.log("cart", cart);
    fetchedCart = cart;
    const items = await cart.getItems();
    let order = await req.user.createOrder();
    order.RestaurantId = parseInt(restaurantId);
    console.log("New order", order);
    order = await order.addItems(
      items.map((item) => {
        item.OrderItem = {
          quantity: item.CartItem.quantity,
        };
        return item;
      })
    );
    fetchedCart = await fetchedCart.setItems(null);
    return res.json(order);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

// 2. READ (Get All)
exports.getOrders = async (req, res) => {
  try {
    const orders = await req.user.getOrders({
      include: [{ model: Item }, { model: Restaurant }],
    });

    return res.json(orders);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

// 3. READ (Get One)
exports.getOrder = async (req, res) => {
  try {
    const orders = await req.user.getOrders({
      include: [{ model: Item }, { model: Restaurant }],
    });
    const order = orders[0];
    return res.json(order);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

// 4. UPDATE
exports.updateOrder = async (req, res) => {
  const id = parseInt(req.params.id);
  const {
    userId,
    restaurantId,
    total,
    grandTotal,
    deliveryCharge,
    orders,
    status,
    address,
    paymentMode,
    paymentStatus,
    instruction,
    createdAt,
    updatedAt,
  } = req.body;
  try {
    const order = await Order.findOne({
      where: { id },
    });
    order.userId = userId;
    order.restaurantId = restaurantId;
    order.total = total;
    order.grandTotal = grandTotal;
    order.deliveryCharge = deliveryCharge;
    order.orders = orders;
    order.status = status;
    order.address = address;
    order.paymentMode = paymentMode;
    order.paymentStatus = paymentStatus;
    order.instruction = instruction;
    order.createdAt = createdAt;
    order.updatedAt = updatedAt;
    await order.save();
    console.log(order);
    return res.json(order);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

// 5. DELETE
exports.deleteOrder = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const order = await Order.findOne({
      where: { id },
    });
    await order.destroy();
    return res.json({ message: "Order deleted!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.getOrdersPrice = async (req, res) => {
  try {
    const orders = await req.user.getOrders({
      include: [{ model: Item }, { model: Restaurant }],
    });
    const transformedOrder = getTotalPrice(orders);
    return res.json(transformedOrder);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

exports.getOrdersQuantity = async (req, res) => {
  try {
    const orders = await req.user.getOrders({
      include: [{ model: Item }, { model: Restaurant }],
    });
    const transformedOrder = getTotalQuantity(orders);
    return res.json(transformedOrder);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

const arrayTransform = (arr) => {
  return arr
    .map((d) => d.Items)
    .map((d) =>
      d.map((d) => ({
        itemName: d.name,
        price: parseFloat(d.price),
        restaurantId: d.RestaurantId,
        isVeg: d.isVeg,
        categoryId: d.ItemCategoryId,
        quantity: parseFloat(d.OrderItem.quantity),
        totalPrice: parseFloat(d.OrderItem.quantity) * parseFloat(d.price),
      }))
    )
    .flat(1);
};
const priceGroupSum = (arr) => {
  const res = Object.values(
    arr.reduce((agg, arr) => {
      if (agg[arr.itemName] === undefined)
        agg[arr.itemName] = { itemName: arr.itemName, totalPrice: 0 };
      agg[arr.itemName].totalPrice += +arr.price;
      return agg;
    }, {})
  );
  return res;
};

const quantityGroupSum = (arr) => {
  const res = Object.values(
    arr.reduce((agg, arr) => {
      if (agg[arr.itemName] === undefined)
        agg[arr.itemName] = { itemName: arr.itemName, totalQuantity: 0 };
      agg[arr.itemName].totalQuantity += +arr.quantity;
      return agg;
    }, {})
  );
  return res;
};

const getTotalPrice = (arr) => {
  const transformedArr = arrayTransform(arr);
  return priceGroupSum(transformedArr);
};

const getTotalQuantity = (arr) => {
  const transformedArr = arrayTransform(arr);
  return quantityGroupSum(transformedArr);
};

////////////////////////////////////////////////////////////////////////////////////
//////////////// OLD CODE ///////////////////////////////////////////////////////////

// exports.postOrderPage = async (req, res) => {
//   let fetchedCart;
//   let items;
//   try {
//     const cart = await req.user.getCart();
//     fetchedCart = cart;
//     const cartItems = await cart.getItems();
//     items = cartItems;
//     let order = await req.user.createOrder();
//     let itemsData = items.map((item) => {
//       item.OrderItem = { quantity: item.CartItem.quantity };
//       return item;
//     });
//     order = await order.addItems(itemsData);
//     return res.json(order);
//   } catch (err) {
//     fetchedCart = await fetchedCart.removeItems();
//     console.log(err);
//     return res.status(500).json({ error: "Something went wrong" });
//   }
// };

// exports.createOrder = async (req, res, next) => {
//   const user = await User.findByPk(req.user.id);
//   let fetchedCart = user.createCart();
//   user
//     .getCart()
//     .then((cart) => {
//       fetchedCart = cart;
//       return cart.getItems();
//     })
//     .then((items) => {
//       return user
//         .createOrder()
//         .then((order) => {
//           return order.addItems(
//             items.map((item) => {
//               item.orderItem = { quantity: item.cartItem.quantity };
//               return item;
//             })
//           );
//         })
//         .catch((err) => console.log(err));
//     })
//     .then((result) => {
//       fetchedCart.setItems(null);
//     })
//     .then((result) => {
//       console.log("Order placed and cart emptied");
//       res.redirect("/account");
//     })
//     .catch((err) => console.log(err));
// };

// exports.getOrders = async (req, res, next) => {
//   const orders = await req.user.getOrders({ include: ["items"] });
//   return res.json(orders);
// };

// exports.createOrder = async (req, res) => {
//   const data = req.body;
//   const userId = req.user.id;
//   console.log("userId", userId);
//   console.log("restaurantId", data.restaurantId);
//   console.log("Order from createOrder", data);
//   //const userId = req.user.id;
//   try {
//     let orderData = {
//       userId: userId,
//       restaurantId: data.restaurantId,
//       total: data.total,
//       deliveryCharge: data.deliveryCharge,
//       grandTotal: data.grandTotal,
//       status: data.status,
//       address: data.address,
//       paymentMode: data.paymentMode,
//       paymentStatus: data.paymentStatus,
//     };
//     if (data.instruction)
//       orderData = { ...orderData, instruction: data.instruction };
//     const order = await Order.create(orderData);
//     return res.json(order);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Something went wrong" });
//   }
// };

// // exports.getOrder = async (req, res) => {
// //   const id = parseInt(req.params.id);
// //   try {
// //     const order = await Order.findOne({
// //       where: {
// //         id,
// //       },
// //     });
// //     return res.json(order);
// //   } catch (err) {
// //     console.log(err);
// //     return res.status(500).json({ error: "Something went wrong!" });
// //   }
// // };

// // exports.getAllOrdersByUser = async (req, res) => {
// //   const userId = req.user.id;
// //   console.log("userId from ordersByUser", userId);
// //   try {
// //     // const orders = await Order.findAll();
// //     const orders = await Order.findAll({
// //       where: { userId },
// //       include: [Restaurant, Item],
// //       // include: [Restaurant, Item],
// //     });
// //     return res.json(orders);
// //   } catch (err) {
// //     console.log(err);
// //     return res.status(500).json({ error: "Something went wrong!" });
// //   }
// // };

// // exports.checkBody = (req, res, next) => {
// //   if (
// //     !req.body.userId ||
// //     !req.body.restaurantId ||
// //     !req.body.order ||
// //     !req.body.total ||
// //     !req.body.grandTotal ||
// //     !req.body.deliveryCharge ||
// //     !req.body.status ||
// //     !req.body.total ||
// //     !req.body.paymentMode ||
// //     !req.body.instruction ||
// //     !req.body.createdAt ||
// //     !req.body.updatedAt ||
// //     !req.body.paymentStatus
// //   ) {
// //     return res.status(400).json({
// //       status: "fail",
// //       message: "One or more required input values are missing",
// //     });
// //   }
// //   next();
// // };

// // // exports.getAllOrders = async (req, res) => {
// // //   const user = await User.findByPk(req.user.id);
// // //   console.log("user from getAllOrders", user);
// // //   try {
// // //     const orders = await Order.findAll({{ include: [Item] }});
// // //     console.log(orders);
// // //     return res.json(orders);
// // //   } catch (err) {
// // //     console.log(err);
// // //     return res.status(500).json({ error: "Something went wrong!" });
// // //   }
// // // };

// exports.getAllOrders = async (req, res) => {
//   const user = await User.findByPk(req.user.id);
//   //const restaurantId = req.body.restaurantId;
//   console.log("userId from ordersByUser", user);
//   try {
//     // const orders = await Order.findAll();
//     const orders = await Order.findAll({
//       where: { id: user.id },
//       include: [Restaurant, Item],
//       // include: [Restaurant, Item],
//     });
//     return res.json(orders);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Something went wrong!" });
//   }
// };

// order.paymentStatus = req.body.paymentStatus;
// order.RestaurantId = req.body.RestaurantId;
// order.paymentMode = req.body.paymentMode;
// order.instruction = req.body.instruction;
// let totalPrice = 0;
// for (let order of orders) {
//   for (let ord of order.Items) {
//     for (let o of ord.order.Items.OrderItem) {
//       totalPrice += ord.price * o.Items.OrderItem.quantity;
//     }
//   }
// }
