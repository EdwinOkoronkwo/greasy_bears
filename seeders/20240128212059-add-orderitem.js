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
    await queryInterface.bulkInsert("orderitems", [
      {
        id: 1,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d800",
        orderId: "20ab3fd9-252f-41d8-b1ff-445a1044d500",
        itemId: "20ab3fd9-252f-41d8-b1ff-445a1044d700",
        quantity: 1,
        createdAt: "2024-01-28",
        updatedAt: "2024-01-28",
      },
      {
        id: 2,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d801",
        orderId: "20ab3fd9-252f-41d8-b1ff-445a1044d500",
        itemId: "20ab3fd9-252f-41d8-b1ff-445a1044d701",
        quantity: 1,
        createdAt: "2024-01-28",
        updatedAt: "2024-01-28",
      },
      {
        id: 3,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d802",
        orderId: "20ab3fd9-252f-41d8-b1ff-445a1044d500",
        itemId: "20ab3fd9-252f-41d8-b1ff-445a1044d702",
        quantity: 2,
        createdAt: "2024-01-28",
        updatedAt: "2024-01-28",
      },
      {
        id: 4,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d803",
        orderId: "20ab3fd9-252f-41d8-b1ff-445a1044d501",
        itemId: "20ab3fd9-252f-41d8-b1ff-445a1044d703",
        quantity: 2,
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
    await queryInterface.bulkDelete("orderitems", null, {});
  },
};
