const { User } = require("../../models");

exports.checkBody = (req, res, next) => {
  if (
    !req.body.name ||
    !req.body.email ||
    !req.body.phone ||
    !req.body.status ||
    !req.body.type ||
    !req.body.emailVerified
  ) {
    return res.status(400).json({
      status: "fail",
      message: "Missing one of the required inputs. ",
    });
  }
  next();
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

exports.getUser = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const user = await User.findOne({
      where: {
        id,
      },
    });
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

exports.updateUser = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, uuid, email, phone, type, status, emailVerified } = req.body;
  try {
    const user = await User.findOne({
      where: { id },
    });
    user.uuid = uuid;
    user.name = name;
    user.email = email;
    user.phone = phone;
    user.type = type;
    user.status = status;
    user.emailVerified = emailVerified;
    await user.save();
    console.log(user);
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.deleteUser = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const user = await User.findOne({
      where: { id },
    });
    await user.destroy();
    return res.json({ message: "User deleted!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.createUser = async (req, res) => {
  console.log("req: ", req);
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const type = req.body.type;
  const status = req.body.status;
  const emailVerified = req.body.emailVerified;
  const createdAt = req.body.createdAt;
  const updatedAt = req.body.updatedAt;

  try {
    const data = {
      email,
      phone,
      name,
      type,
      status,
      emailVerified,
      createdAt,
      updatedAt,
    };
    let user = await new User(data).save();
    return res.json(user);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
