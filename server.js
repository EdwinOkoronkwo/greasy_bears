const { sequelize } = require("./models");

const app = require("./src/app");

app.listen({ port: 5000 }, async () => {
  console.log(`Server up on http://localhost:5000`);
  await sequelize.authenticate();
  console.log("Connected to MariaDB Database!");
});
