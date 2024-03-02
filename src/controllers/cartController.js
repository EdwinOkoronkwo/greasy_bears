const { Cart, Item, User, CartItem } = require("../../models");
const cart = require("../../models/cart");

// 1. CREATE
exports.createCart = async (req, res, next) => {
  // console.log("req.body from create cart", req.body);
  const itemId = req.body.id;
  console.log("req.body in createCart", req.body);
  try {
    let cart = await req.user.getCart();
    console.log("cart", cart);
    const items = await cart.getItems({ where: { id: itemId } });
    let newQuantity = 1;
    let item;
    if (items.length > 0) {
      item = items[0];
    }
    if (item) {
      newQuantity = item.CartItem.quantity + 1;
      cart = await cart.addItem(item, { through: { quantity: newQuantity } });
      return res.json(cart);
    }
    item = await Item.findByPk(itemId);
    cart = await cart.addItem(item, {
      through: { quantity: newQuantity },
    });
    console.log(cart);
    return res.json(cart);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

// 2. READ (Get One)
exports.getCart = async (req, res) => {
  try {
    const cart = await req.user.getCart();
    if (cart) {
      const cartItems = await cart.getItems();
      console.log(cartItems);
      return res.json(cartItems);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

// 3 UPDATE
exports.updateCart = async (req, res) => {
  const id = parseInt(req.params.id);
  const {
    userId,
    totalItems,
    totalPrice,
    grandTotal,
    deliveryCharge,
    createdAt,
    updatedAt,
  } = req.body;
  try {
    const cart = await Cart.findOne({
      where: { id },
    });
    cart.userId = userId;
    cart.totalItems = totalItems;
    cart.grandTotal = grandTotal;
    cart.deliveryCharge = deliveryCharge;
    cart.totalPrice = totalPrice;
    cart.createdAt = createdAt;
    cart.updatedAt = updatedAt;
    await cart.save();
    console.log(cart);
    return res.json(cart);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

// 4. DELETE
exports.deleteCartItem = async (req, res, next) => {
  // const itemId = parseInt(req.params.id);
  console.log("req.body in deletecartitem", req.body);
  const itemId = req.body.id;
  try {
    const cart = await req.user.getCart();
    const items = await cart.getItems({ where: { id: itemId } });
    const response = items[0].CartItem.destroy();
    return res.json(response);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

// 5. DELETE (Alternative)
exports.postDeleteCartItem = async (req, res) => {
  try {
    const itemId = parseInt(req.params.id);
    let fetchedCart;
    let cart = await req.user.getCart();
    fetchedCart = cart;
    const item = await Item.findByPk(itemId);
    fetchedCart = await fetchedCart.removeItem(item);
    return res.json(fetchedCart);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////
//////////// OLD CODE ////////////////////////////////////////////////////////////////////

// exports.deleteCart = async (req, res) => {
//   const id = parseInt(req.params.id);
//   try {
//     const cart = await Cart.findOne({
//       where: { id },
//     });
//     await cart.destroy();
//     return res.json({ message: "Cart deleted!" });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Something went wrong" });
//   }
// };

// // exports.createCart = async (req, res) => {
// //   const {
// //     userId,
// //     totalItems,
// //     totalPrice,
// //     grandTotal,
// //     deliveryCharge,
// //     createdAt,
// //     updatedAt,
// //   } = req.body;
// //   try {
// //     const cart = await Cart.create({
// //       userId,
// //       totalItems,
// //       totalPrice,
// //       grandTotal,
// //       deliveryCharge,
// //       createdAt,
// //       updatedAt,
// //     });
// //     return res.json(cart);
// //   } catch (err) {
// //     console.log(err);
// //     return res.status(500).json({ error: "Something went wrong" });
// //   }
// // };

// exports.createCart = (req, res, next) => {
//   const itemId = req.body.itemId;
//   let fetchedCart;
//   let newQuantity = 1;
//   req.user
//     .getCart()
//     .then((cart) => {
//       fetchedCart = cart;
//       return cart.getItems({ where: { id: itemId } });
//     })
//     .then((items) => {
//       let item;
//       if (items.length > 0) {
//         item = items[0];
//       }
//       if (item) {
//         const oldQuantity = item.cartItem.quantity;
//         newQuantity = oldQuantity + 1;
//         return item;
//       }
//       return Item.findByPk(itemId);
//     })
//     .then((item) => {
//       console.log(item);
//       return fetchedCart.addProduct(item, {
//         through: { quantity: newQuantity },
//       });
//     })
//     .then(() => {
//       res.redirect("/");
//       console.log("Success from cartCreate");
//     })
//     .catch((err) => console.log(err));
// };

// exports.deleteItemFromCart = (req, res, next) => {
//   const itemId = req.body.itemId;
//   req.user
//     .getCart()
//     .then((cart) => {
//       return cart.getItems({ where: { id: itemId } });
//     })
//     .then((items) => {
//       const item = items[0];
//       item.cartItem.destroy();
//     })
//     .then((result) => {
//       console.log("Item deleted");
//       res.redirect("/cart");
//     })
//     .catch((err) => console.log(err));
// };

// /////////////////////////////////////////////////////////////////////////
// /////////  Leyla Web Dev ////////////////////////////////////////////////

// exports.getCartPage = (req, res) => {
//   req.user
//     .getCart()
//     .then((cart) => {
//       if (cart) {
//         return cart.getItems();
//       }
//       return null;
//     })
//     .then((cartItems) => {
//       let totalPrice = 0;
//       if (cartItems) {
//         for (let item of cartItems) {
//           totalPrice += +item.cartItem.quantity * +item.price;
//         }
//       }
//       res.json(cart);
//       //res.json({ cartItems, totalPrice });
//     });
// };

// exports.postCart = async (req, res, next) => {
//   console.log(req.body);
//   const itemId = req.body.ItemId;
//   console.log("item id from postCart", itemId);
//   try {
//     let cart = await req.user.getCart();
//     const items = await cart.getItems({ where: { id: itemId } });
//     let newQuantity = 1;
//     let item;
//     if (items.length > 0) {
//       item = items[0];
//     }
//     if (item) {
//       newQuantity = item.CartItem.quantity + 1;
//       cart = await cart.addItem(item, { through: { quantity: newQuantity } });
//       return res.json(cart);
//     }
//     item = await Item.findByPk(itemId);
//     cart = await cart.addItem(item, {
//       through: { quantity: newQuantity },
//     });
//     console.log(cart);
//     return res.json(cart);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Something went wrong" });
//   }
// };

// exports.postCartPage = (req, res) => {
//   //  const itemId = parseInt(req.params.id);
//   console.log(req.body);
//   const itemId = req.body.ItemId;
//   console.log("itemId from postCartPage", itemId);
//   let newQuantity = 1;
//   let fetchedCart;
//   req.user
//     .getCart()
//     .then((cart) => {
//       if (!cart) {
//         return req.user.createCart();
//       }
//       return cart;
//     })
//     .then((cart) => {
//       fetchedCart = cart;
//       return cart.getItems({ where: { id: itemId } });
//     })
//     .then((items) => {
//       if (items.length) {
//         newQuantity = items[0].cartItem.quantity + 1;
//         return items[0];
//       }
//       return Item.findByPk(itemId);
//     })
//     .then((item) => {
//       console.log(item);
//       return fetchedCart.addItem(item, {
//         through: { quantity: newQuantity },
//       });
//     })
//     .then(() => {
//       //res.redirect("/cart");
//       console.log("Success");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

//   // const itemId = req.body.itemId;
//   // let fetchedCart;
//   // req.user
//   //   .getCart()
//   //   .then((cart) => {
//   //     fetchedCart = cart;
//   //     return Item.findByPk(itemId);
//   //   })
//   //   .then((item) => {
//   //     return fetchedCart.removeItem(itemId);
//   //   })
//   //   .then(() => {
//   //     res.redirect("/");
//   //   })
//   //   .cart((error) => {
//   //     console.log(error);
//   //   });
// };

// // for (let item of cartItems) {
// //   console.log(item);
// //   totalPrice += +item.CartItem.quantity * +item.price;
// //   item.totalPrice = totalPrice;
// // }

// // exports.checkBody = (req, res, next) => {
// //   if (
// //     !req.body.userId ||
// //     !req.body.totalItems ||
// //     !req.body.totalPrice ||
// //     !req.body.deliveryCharge ||
// //     !req.body.grandTotal ||
// //     !req.body.createdAt ||
// //     !req.body.updatedAt
// //   ) {
// //     return res.status(400).json({
// //       status: "fail",
// //       message: "One or more required input values are missing",
// //     });
// //   }
// //   next();
// // };

// exports.getCartPage = (req, res) => {
//   req.user
//     .getCart()
//     .then((cart) => {
//       if (cart) {
//         return cart.getItems();
//       }
//       return null;
//     })
//     .then((cartItems) => {
//       let totalPrice = 0;
//       if (cartItems) {
//         for (let item of cartItems) {
//           totalPrice += +item.cartItem.quantity * +item.price;
//         }
//       }
//       res.json(cart);
//       //res.json({ cartItems, totalPrice });
//     });
// };

// exports.getAllCarts = async (req, res) => {
//   try {
//     const carts = await Cart.findAll();
//     return res.json(carts);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Something went wrong!" });
//   }
// };

// // exports.getCart = (req, res) => {
// //   const itemId = req.body.ItemId;
// //   console.log("ItemId from getCart", itemId);
// //   getItemById(itemId, (product) => {
// //     addItemToCart(itemId, itemPrice);
// //     res.redirect("/");
// //   });
// // };

// // co
// // const cartItems = await req.user.getCart().then((cart) => {
// //   console.log(cart);
// //   return res.json(cartItems);
// // });

// // exports.getCart = async (req, res) => {
// //   const user = await User.findByPk(req.user.id);
// //   console.log("user from getCart");
// //   try {
// //     const cart = await user.getCart();
// //     const cartItems = await cart.getItems();
// //     return res.json(cartItems);
// //   } catch (err) {
// //     console.log(err);
// //     return res.status(500).json({ error: "Something went wrong!" });
// //   }
// // };
