const { User } = require("../../models");

// 1. CREATE
exports.createUser = async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.firstName;
  const image = req.body.image;
  const phone = req.body.phone;
  const email = req.body.email;
  const type = req.body.type;
  const status = req.body.status;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  const createdAt = req.body.createdAt;
  const updatedAt = req.body.updatedAt;
  try {
    const data = {
      email,
      phone,
      firstName,
      lastName,
      image,
      type,
      status,
      password,
      confirmPassword,
      createdAt,
      updatedAt,
    };
    const user = await new User.save(data);
    return res.json(user);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

// 2. READ (Get All)
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

// 3. READ (Get One)
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

// 4. READ (Get Profile)
exports.profile = async (req, res) => {
  const userId = req.user.id;
  try {
    const profile = await User.findByPk(userId);
    return res.json(profile);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong!" });
  }
};

// 5. UPDATE (Profile)
exports.updateProfile = async (req, res) => {
  const userId = req.user.id;
  const { phone } = req.body;
  try {
    const updatedProfile = await User.findOne({
      where: { id: userId },
    });
    if (req.file) {
      updatedProfile.image = req.file.filename;
    }
    updatedProfile.phone = phone;
    await updatedProfile.save();
    console.log(updatedProfile);
    return res.json(updatedProfile);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

// 6. UPDATE (User)
exports.updateUser = async (req, res) => {
  const id = parseInt(req.params.id);
  const {
    firstName,
    lastName,
    uuid,
    email,
    image,
    phone,
    type,
    status,
    password,
    confirmPassword,
  } = req.body;
  try {
    const user = await User.findOne({
      where: { id },
    });
    user.uuid = uuid;
    user.firstName = firstName;
    user.lastName = lastName;
    user.image = image;
    user.email = email;
    user.phone = phone;
    user.type = type;
    user.status = status;
    user.password = password;
    user.confirmPassword = confirmPassword;
    await user.save();
    console.log(user);
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

// 7. DELETE
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

//////////////////////////////////////////////////////////////////////////////////////////
///////////// OLD CODE ///////////////////////////////////////////////////////////////

// exports.profile = async (req, res) => {
//   const userId = req.user.id;
//   try {
//     const profile = await User.findByPk(userId);
//     return res.json(profile);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Something went wrong!" });
//   }
// };

// exports.updatePhoneNumber = async (req, res) => {
//   const user = req.user;
//   const phone = req.body.phone;

//   try {
//     const userData = await User.findByPkAndUpdate(user.id);
//     userData.phone = phone;
//     await userData.save();
//     console.log(userData);
//     return res.json(userData);
//   } catch (err) {
//     return res.status(500).json({ error: "Something went wrong!" });
//   }
// };

// //exports.updateProfile = async (req, res, next) => {};
// exports.checkBody = (req, res, next) => {
//   if (
//     !req.body.firstName ||
//     !req.body.lastName ||
//     !req.body.email ||
//     !req.body.phone ||
//     !req.body.status ||
//     !req.body.type
//   ) {
//     return res.status(400).json({
//       status: "fail",
//       message: "Missing one of the required inputs. ",
//     });
//   }
//   next();
// };
