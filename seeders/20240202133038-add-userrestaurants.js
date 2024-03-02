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
    await queryInterface.bulkInsert("userrestaurants", [
      {
        uuid: "20ab3fd9-252f-41d8-b1ff-445a10441200",
        createdAt: "2024-01-28",
        updatedAt: "2024-01-28",
      },
      {
        uuid: "20ab3fd9-252f-41d8-b1ff-445a10441201",
        createdAt: "2024-01-28",
        updatedAt: "2024-01-28",
      },
      {
        uuid: "20ab3fd9-252f-41d8-b1ff-445a10441201",
        createdAt: "2024-01-28",
        updatedAt: "2024-01-28",
      },
      {
        uuid: "20ab3fd9-252f-41d8-b1ff-445a10441201",
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
    await queryInterface.bulkDelete("userrestaurants", null, {});
  },
};
