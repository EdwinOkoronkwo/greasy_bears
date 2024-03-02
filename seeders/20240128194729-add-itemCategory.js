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
        name: "American",
        createdAt: "2024-01-28",
        updatedAt: "2024-01-28",
      },
      {
        id: 2,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d601",
        name: "Brazilian",
        createdAt: "2024-01-28",
        updatedAt: "2024-01-28",
      },
      {
        id: 3,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d602",
        name: "Mexican",
        createdAt: "2024-01-28",
        updatedAt: "2024-01-28",
      },
      {
        id: 3,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d603",
        name: "Thai",
        createdAt: "2024-01-28",
        updatedAt: "2024-01-28",
      },
      {
        id: 4,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d603",
        name: "Indian",
        createdAt: "2024-01-28",
        updatedAt: "2024-01-28",
      },
      {
        id: 5,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d604",
        name: "Canadian",
        createdAt: "2024-01-28",
        updatedAt: "2024-01-28",
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
