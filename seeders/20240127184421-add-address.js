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
    await queryInterface.bulkInsert("addresses", [
      {
        id: 1,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d300",
        title: "Holiday Inn Windermere",
        landmark: "Holiday Inn Windermere",
        address: "6125 Andrews Loop SW Edmonton, AB, Canada",
        houseNumber: "1",
        createdAt: "2024-01-27",
        updatedAt: "2024-01-27",
        lat: 53.43096,
        lng: -113.58801,
      },
      {
        id: 2,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d301",
        title: "Earls South Common",
        landmark: "South Common Strip Malls",
        address: "1505 99th Street Edmonton AB, Canada",
        houseNumber: "1",
        createdAt: "2024-01-27",
        updatedAt: "2024-01-27",
        lat: 53.4544,
        lng: -113.4841,
      },
      {
        id: 3,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d302",
        title: "Earls West Edmonton Mall",
        landmark: "West Edmonton Mall",
        address: "Bourbon Street 8882 170th Street, Edmonton, AB, Canada",
        houseNumber: "Unit 1667",
        createdAt: "2024-01-27",
        updatedAt: "2024-01-27",
        lat: 53.5234,
        lng: -113.6235,
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
    await queryInterface.bulkDelete("addresses", null, {});
  },
};
