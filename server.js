const { sequelize, User } = require("./models");

const app = require("./src/app");

sequelize
  // force true creates new tables
  //  .sync({ force: true })
  .sync()
  .then((result) => {
    //console.log(result);
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({
        firstName: "John",
        lastName: "Wick",
        email: "johnwick@test.com",
        phone: "6666666666",
        image: "1708437858975-379156769john-wick-2.jpg",
        password: "password",
        confirmPassword: "password",
        status: "active",
        type: "admin",
      });
    }
    return Promise.resolve(user);
  })
  .then((user) => {
    console.log(user);
    //return user.createCart();
  })
  .then((cart) => {
    console.log(cart);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

// app.listen({ port: process.env.PORT }, () => {
//   console.log(`Server up on http://localhost:${process.env.PORT}`);
// });
