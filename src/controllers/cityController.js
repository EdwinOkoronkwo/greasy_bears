const { City } = require("../../models");

// 1. CREATE
exports.createCity = async (req, res) => {
  const { name, lat, lng, status } = req.body;
  try {
    const city = await City.create({
      name,
      lat,
      lng,
      status,
    });
    return res.json(city);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

// 2. READ (Get All)
exports.getCities = async (req, res) => {
  try {
    const cities = await City.findAll();
    return res.json(cities);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

// READ (Get One)
exports.getCity = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const city = await City.findOne({
      where: {
        id,
      },
    });
    return res.json(city);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

// 4. UPDATE
exports.updateCity = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, uuid, lat, lng, status } = req.body;
  try {
    const city = await City.findOne({
      where: { id },
    });
    city.uuid = uuid;
    city.name = name;
    city.lat = lat;
    city.lng = lng;
    city.status = status;
    await city.save();
    console.log(city);
    return res.json(city);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

// 5. DELETE
exports.deleteCity = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const city = await City.findOne({
      where: { id },
    });
    await city.destroy();
    return res.json({ message: "City deleted!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////// OLD CODE ///////////////////////////////////////////////////////////

// exports.checkBody = (req, res, next) => {
//   if (!req.body.name || !req.body.lat || !req.body.lng || !req.body.status) {
//     return res.status(400).json({
//       status: "fail",
//       message: "Missing or lat or lng or status ",
//     });
//   }
//   next();
// };
