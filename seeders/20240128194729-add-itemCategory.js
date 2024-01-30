"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("itemcategories", [
      {
        id: 1,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d600",
        restaurantId: "20ab3fd9-252f-41d8-b1ff-445a1044d200",
        name: "American",
      },
      {
        id: 2,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d601",
        restaurantId: "20ab3fd9-252f-41d8-b1ff-445a1044d200",
        name: "Brazilian",
      },
      {
        id: 3,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d602",
        restaurantId: "20ab3fd9-252f-41d8-b1ff-445a1044d200",
        name: "Mexican",
      },
      {
        id: 3,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d603",
        restaurantId: "20ab3fd9-252f-41d8-b1ff-445a1044d200",
        name: "Thai",
      },
      {
        id: 4,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d603",
        restaurantId: "20ab3fd9-252f-41d8-b1ff-445a1044d200",
        name: "Indian",
      },
      {
        id: 5,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d604",
        restaurantId: "20ab3fd9-252f-41d8-b1ff-445a1044d200",
        name: "Canadian",
      },
      {
        id: 6,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d605",
        restaurantId: "20ab3fd9-252f-41d8-b1ff-445a1044d202",
        name: "Delicio Pizza",
      },
      {
        id: 7,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d606",
        restaurantId: "20ab3fd9-252f-41d8-b1ff-445a1044d201",
        name: "Burger",
      },
      {
        id: 8,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d607",
        restaurantId: "20ab3fd9-252f-41d8-b1ff-445a1044d200",
        name: "Beer",
      },
      {
        id: 9,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d608",
        restaurantId: "20ab3fd9-252f-41d8-b1ff-445a1044d200",
        name: "Pastries",
      },
      {
        id: 10,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d609",
        restaurantId: "20ab3fd9-252f-41d8-b1ff-445a1044d200",
        name: "Wine",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("itemcategories", null, {});
  },
};
