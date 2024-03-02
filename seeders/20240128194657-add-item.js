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
    await queryInterface.bulkInsert("items", [
      {
        id: 1,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d700",
        name: "Rib-eye Steak",
        cover:
          "https://images.unsplash.com/photo-1623765306406-b8bad9a7644c?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Tasty steak",
        price: 55.75,
        status: true,
        isVeg: false,
        createdAt: "2024-01-28",
        updatedAt: "2024-01-28",
      },
      {
        id: 2,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d701",
        name: "Sticky Toffee Cake",
        cover:
          "https://images.unsplash.com/photo-1604423907382-6eaa8b5ccb3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RpY2t5JTIwdG9mZmVlfGVufDB8fDB8fHww",
        description: "Smooth and delicious cake",
        price: 12.5,
        status: true,
        isVeg: false,
        createdAt: "2024-01-28",
        updatedAt: "2024-01-28",
      },
      {
        id: 3,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d702",
        name: "Corona Beer",
        cover:
          "https://images.unsplash.com/photo-1618183479302-1e0aa382c36b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlZXJ8ZW58MHx8MHx8fDA%3D",
        description: "Rich, thick and Dark",
        price: 11.0,
        status: true,
        isVeg: false,
        createdAt: "2024-01-28",
        updatedAt: "2024-01-28",
      },
      {
        id: 4,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d703",
        name: "Delicio Pizza",
        cover:
          "https://plus.unsplash.com/premium_photo-1672498294724-dde3b2e41e19?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Rich, thick and Dark",
        price: 29.95,
        status: true,
        isVeg: false,
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
    await queryInterface.bulkDelete("items", null, {});
  },
};
