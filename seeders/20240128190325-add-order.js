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
        userId: "20ab3fd9-252f-41d8-b1ff-445a1044d101",
        restaurantId: "20ab3fd9-252f-41d8-b1ff-445a1044d200",
        address: "1505 99th Street Edmonton, AB, Canada",
        total: 83.25,
        grandTotal: 98.25,
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
        userId: "20ab3fd9-252f-41d8-b1ff-445a1044d101",
        restaurantId: "20ab3fd9-252f-41d8-b1ff-445a1044d202",
        address: "Unit 12 5098 Windermere Boulevard NW, Edmonton, AB, Canada",
        total: 33.25,
        grandTotal: 41.25,
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
