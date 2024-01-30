const { Address } = require("../../models");

exports.checkBody = (req, res, next) => {
  if (
    !req.body.name ||
    !req.body.lat ||
    !req.body.lng ||
    !req.body.status ||
    !req.body.userId ||
    !req.body.landmark ||
    !req.body.address ||
    !req.body.houseNumber
  ) {
    return res.status(400).json({
      status: "fail",
      message:
        "Missing or lat or lng or status or address or userId or landmark or house number",
    });
  }
  next();
};
exports.getAllAddresses = async (req, res) => {
  try {
    const addresses = await Address.findAll();
    return res.json(addresses);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

exports.getAddress = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const address = await Address.findOne({
      where: {
        id,
      },
    });
    return res.json(address);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

exports.updateAddress = async (req, res) => {
  const id = parseInt(req.params.id);
  const { userId, title, landmark, address, houseNumber, lat, lng } = req.body;
  try {
    const data = await Address.findOne({
      where: { id },
    });
    data.uuid = uuid;
    data.title = title;
    data.userId = userId;
    data.landmark = landmark;
    data.address = address;
    data.houseNumber = houseNumber;
    data.lat = lat;
    data.lng = lng;
    await data.save();
    console.log(data);
    return res.json(data);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

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

exports.createAddress = async (req, res) => {
  const { userId, title, landmark, address, houseNumber, lat, lng } = req.body;
  try {
    const data = await Address.create({
      userId,
      title,
      landmark,
      address,
      houseNumber,
      lat,
      lng,
    });
    return res.json(data);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
