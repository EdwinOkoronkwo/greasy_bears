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
    await queryInterface.bulkInsert("carts", [
      {
        id: 1,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d900",
        userId: "20ab3fd9-252f-41d8-b1ff-445a1044d101",
        totalItems: 3,
        totalPrice: 83.25,
        deliveryCharge: 15.0,
        grandTotal: 98.25,
        createdAt: "2024-01-28",
        updatedAt: "2024-01-28",
      },
      {
        id: 2,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d901",
        userId: "20ab3fd9-252f-41d8-b1ff-445a1044d101",
        totalItems: 1,
        totalPrice: 33.25,
        deliveryCharge: 8.0,
        grandTotal: 41.25,
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
    await queryInterface.bulkDelete("carts", null, {});
  },
};
