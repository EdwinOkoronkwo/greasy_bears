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
    await queryInterface.bulkInsert("cartitems", [
      {
        id: 1,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a10441000",
        cartId: "20ab3fd9-252f-41d8-b1ff-445a1044d900",
        itemId: "20ab3fd9-252f-41d8-b1ff-445a1044d700",
        quantity: 1,
        createdAt: "2024-01-28",
        updatedAt: "2024-01-28",
      },
      {
        id: 2,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a10441001",
        cartId: "20ab3fd9-252f-41d8-b1ff-445a1044d900",
        itemId: "20ab3fd9-252f-41d8-b1ff-445a1044d701",
        quantity: 1,
        createdAt: "2024-01-28",
        updatedAt: "2024-01-28",
      },
      {
        id: 3,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a10441002",
        cartId: "20ab3fd9-252f-41d8-b1ff-445a1044d900",
        itemId: "20ab3fd9-252f-41d8-b1ff-445a1044d702",
        quantity: 2,
        createdAt: "2024-01-28",
        updatedAt: "2024-01-28",
      },
      {
        id: 4,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a10441003",
        cartId: "20ab3fd9-252f-41d8-b1ff-445a1044d901",
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
    await queryInterface.bulkDelete("cartitems", null, {});
  },
};
