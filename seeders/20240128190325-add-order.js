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
    await queryInterface.bulkInsert("orders", [
      {
        id: 1,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d500",
        deliveryCharge: 15.0,
        status: "created",
        paymentStatus: "paid",
        paymentMode: "credit card",
        instruction: "Call me on arrival",
        createdAt: "2024-01-28",
        updatedAt: "2024-01-28",
      },
      {
        id: 2,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d501",
        deliveryCharge: 8.0,
        status: "created",
        paymentStatus: "paid",
        paymentMode: "credit card",
        instruction: "Call me on arrival",
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
    await queryInterface.bulkDelete("orders", null, {});
  },
};
