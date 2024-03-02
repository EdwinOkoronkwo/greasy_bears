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
        firstName: "John",
        lastName: "Wick",
        image:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt10366206%2F&psig=AOvVaw2b6s2F6xOjxMyReQaC2zbM&ust=1707072428407000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPD99N3qj4QDFQAAAAAdAAAAABAE",
        email: "jwick@gmail.com",
        phone: "7806666666",
        type: "admin",
        status: "active",
        password: "password",
        confirmPassword: "password",
        createdAt: "2024-01-27",
        updatedAt: "2024-01-27",
      },
      // {
      //   id: 2,
      //   uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d101",
      //   firstName: "William",
      //   lastName: "Deming",
      //   image:
      //     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt10366206%2F&psig=AOvVaw2b6s2F6xOjxMyReQaC2zbM&ust=1707072428407000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPD99N3qj4QDFQAAAAAdAAAAABAE",
      //   email: "wdeming@gmail.com",
      //   phone: "7806666333",
      //   type: "user",
      //   status: "active",
      //   password: "password",
      //   confirmPassword: "password",
      //   createdAt: "2024-01-27",
      //   updatedAt: "2024-01-27",
      // },
      // {
      //   id: 3,
      //   uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d102",
      //   firstName: "Vincent",
      //   lastName: "Grey",
      //   image:
      //     "https://ew.com/thmb/leBKNFhNxdoo4qwLUSqmboJ9j3s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MCDCOLL_EC011-ed52cb7260484acbb5ea361458244c4c.jpg",
      //   email: "vincent.com",
      //   phone: "7803333333",
      //   type: "user",
      //   status: "active",
      //   password: "password",
      //   confirmPassword: "password",
      //   createdAt: "2024-01-27",
      //   updatedAt: "2024-01-27",
      // },
      // {
      //   id: 4,
      //   uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d103",
      //   firstName: "Vincent",
      //   lastName: "Grey",
      //   image:
      //     "https://ew.com/thmb/leBKNFhNxdoo4qwLUSqmboJ9j3s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MCDCOLL_EC011-ed52cb7260484acbb5ea361458244c4c.jpg",
      //   email: "vincent@gmail.com",
      //   phone: "7803334444",
      //   type: "user",
      //   status: "active",
      //   password: "password",
      //   confirmPassword: "password",
      //   createdAt: "2024-01-27",
      //   updatedAt: "2024-01-27",
      // },
      // {
      //   id: 5,
      //   uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d104",
      //   firstName: "Kate",
      //   lastName: "Rouge",
      //   image:
      //     "https://www.hollywoodreporter.com/wp-content/uploads/2021/09/KATE_20191111_08777_RC.jpg",
      //   email: "jane@gmail.com",
      //   phone: "7803338888",
      //   type: "user",
      //   status: "active",
      //   password: "password",
      //   confirmPassword: "password",
      //   createdAt: "2024-01-27",
      //   updatedAt: "2024-01-27",
      // },
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
