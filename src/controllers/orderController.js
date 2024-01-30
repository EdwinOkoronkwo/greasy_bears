const { Order } = require("../../models");

exports.checkBody = (req, res, next) => {
  if (
    !req.body.userId ||
    !req.body.restaurantId ||
    !req.body.order ||
    !req.body.total ||
    !req.body.grandTotal ||
    !req.body.deliveryCharge ||
    !req.body.status ||
    !req.body.total ||
    !req.body.paymentMode ||
    !req.body.instruction ||
    !req.body.createdAt ||
    !req.body.updatedAt ||
    !req.body.paymentStatus
  ) {
    return res.status(400).json({
      status: "fail",
      message: "One or more required input values are missing",
    });
  }
  next();
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    return res.json(orders);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

exports.getOrder = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const order = await Order.findOne({
      where: {
        id,
      },
    });
    return res.json(order);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

exports.updateOrder = async (req, res) => {
  const id = parseInt(req.params.id);
  const {
    userId,
    restaurantId,
    total,
    grandTotal,
    deliveryCharge,
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

exports.createOrder = async (req, res) => {
  const {
    userId,
    restaurantId,
    total,
    grandTotal,
    deliveryCharge,
    status,
    address,
    paymentMode,
    paymentStatus,
    instruction,
  } = req.body;
  try {
    const order = await Order.create({
      userId,
      restaurantId,
      total,
      grandTotal,
      deliveryCharge,
      status,
      address,
      paymentMode,
      paymentStatus,
      instruction,
    });
    return res.json(order);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
