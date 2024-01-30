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
    await queryInterface.bulkInsert("cities", [
      {
        id: 1,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d400",
        name: "Edmonton",
        lat: 53.5461,
        lng: -113.4937,
        status: "active",
        createdAt: "2024-01-27",
        updatedAt: "2024-01-27",
      },
      {
        id: 2,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d401",
        name: "Calgary",
        lat: 51.0447,
        lng: -114.0719,
        status: "active",
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
    await queryInterface.bulkDelete("cities", null, {});
  },
};
