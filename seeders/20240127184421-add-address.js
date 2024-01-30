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
        userId: "20ab3fd9-252f-41d8-b1ff-445a1044d100",
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
        userId: "20ab3fd9-252f-41d8-b1ff-445a1044d101",
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
        userId: "20ab3fd9-252f-41d8-b1ff-445a1044d101",
        title: "Earls West Edmonton Mall",
        landmark: "West Edmonton Mall",
        address: "Bourbon Street 8882 170th Street, Edmonton, AB, Canada",
        houseNumber: "Unit 1667",
        createdAt: "2024-01-27",
        updatedAt: "2024-01-27",
        lat: 53.5234,
        lng: -113.6235,
      },
      {
        id: 4,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d303",
        userId: "20ab3fd9-252f-41d8-b1ff-445a1044d101",
        title: "Papa Johns Pizza Restaurant",
        landmark: "Current Drive Strip Malls",
        address: "5098 Windermere Boulevard NW Edmonton, AB, Canada",
        houseNumber: "Unit 12",
        createdAt: "2024-01-27",
        updatedAt: "2024-01-27",
        lat: 53.4355,
        lng: -113.5973,
      },
      {
        id: 5,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d304",
        userId: "20ab3fd9-252f-41d8-b1ff-445a1044d102",
        title: "Kegs Steak House",
        landmark: "Current Drive Strip Malls",
        address: "6320 Currents Drive NW Edmonton, AB, Canada",
        houseNumber: "5",
        createdAt: "2024-01-27",
        updatedAt: "2024-01-27",
        lat: 53.43616,
        lng: -113.60914,
      },
      {
        id: 6,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d305",
        userId: "20ab3fd9-252f-41d8-b1ff-445a1044d104",
        title: "Earls 16th Ave",
        landmark: "Earls",
        address: "1110 - 16th Ave NW Calgary, AB, Canada",
        houseNumber: "1",
        createdAt: "2024-01-27",
        updatedAt: "2024-01-27",
        lat: 51.06732,
        lng: -114.08581,
      },
      {
        id: 7,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d306",
        userId: "20ab3fd9-252f-41d8-b1ff-445a1044d104",
        title: "Silver Dragon Restaurant",
        landmark: "Calgary China Town",
        address: "106 3 Ave SE Calgary, AB, Canada",
        houseNumber: "10",
        createdAt: "2024-01-27",
        updatedAt: "2024-01-27",
        lat: 51.05045,
        lng: -114.06176,
      },
      {
        id: 8,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d307",
        userId: "20ab3fd9-252f-41d8-b1ff-445a1044d104",
        title: "Ho Won Chinese Food Restaurant",
        landmark: "Calgary China Town",
        address: "115 2 Ave SE Calgary, AB, Canada",
        houseNumber: "12",
        createdAt: "2024-01-27",
        updatedAt: "2024-01-27",
        lat: 51.05123,
        lng: -114.06176,
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
