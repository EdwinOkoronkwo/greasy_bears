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
    await queryInterface.bulkInsert("users", [
      {
        id: 1,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d100",
        name: "John Wick",
        email: "jwick@gmail.com",
        phone: "7806666666",
        type: "admin",
        status: "active",
        emailVerified: true,
        createdAt: "2024-01-27",
        updatedAt: "2024-01-27",
      },
      {
        id: 2,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d101",
        name: "William Deming",
        email: "wdeming@gmail.com",
        phone: "7806666333",
        type: "user",
        status: "active",
        emailVerified: true,
        createdAt: "2024-01-27",
        updatedAt: "2024-01-27",
      },
      {
        id: 3,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d102",
        name: "Vincent Grey",
        email: "vincent.com",
        phone: "7803333333",
        type: "user",
        status: "active",
        emailVerified: true,
        createdAt: "2024-01-27",
        updatedAt: "2024-01-27",
      },
      {
        id: 4,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d103",
        name: "Vincent Grey",
        email: "vincent@gmail.com",
        phone: "7803334444",
        type: "user",
        status: "active",
        emailVerified: true,
        createdAt: "2024-01-27",
        updatedAt: "2024-01-27",
      },
      {
        id: 5,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d104",
        name: "Jane Doe",
        email: "jane@gmail.com",
        phone: "7803338888",
        type: "user",
        status: "active",
        emailVerified: true,
        createdAt: "2024-01-27",
        updatedAt: "2024-01-27",
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
    await queryInterface.bulkDelete("users", null, {});
  },
};
