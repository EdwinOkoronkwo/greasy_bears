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
    await queryInterface.bulkInsert("restaurants", [
      {
        id: 1,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d200",
        userId: "20ab3fd9-252f-41d8-b1ff-445a1044d101",
        cover:
          "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
        cityId: "20ab3fd9-252f-41d8-b1ff-445a1044d400",
        name: "Earls South Common",
        rating: 4.2,
        cuisines: "Canadian",
        deliveryTime: 30,
        price: 120.0,
        phone: "7804856877",
        email: "customerservice@earls.ca",
        isClose: true,
        description:
          "An approachable place made for friends to gather, families to celebrate. A restaurant where the best ingrediesnts, great service, and outstanding people are brought together",
        openTime: "1400",
        closeTime: "2200",
        status: "active",
        created_at: "2024-01-27",
        updated_at: "2024-01-27",
        latitude: 53.4544,
        longitude: -113.4841,
        address: "1505 99th Street Edmonton, AB, Canada",
        location: "1505 99th Street Edmonton, AB, Canada",
        totalRating: 1200,
        distance: 10.7,
      },
      {
        id: 2,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d201",
        userId: "20ab3fd9-252f-41d8-b1ff-445a1044d101",
        cityId: "20ab3fd9-252f-41d8-b1ff-445a1044d400",
        name: "Earls West Edmonton Mall",
        cover:
          "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
        rating: 4.4,
        cuisines: "American",
        deliveryTime: 30,
        price: 130.0,
        phone: "7804856877",
        email: "customerservice@earls.ca",
        isClose: true,
        description:
          "An approachable place made for friends to gather, families to celebrate. A restaurant where the best ingrediesnts, great service, and outstanding people are brought together",
        openTime: "1400",
        closeTime: "2200",
        status: "active",
        created_at: "2024-01-27",
        updated_at: "2024-01-27",
        latitude: 53.5234,
        longitude: -113.6235,
        address: "Unit 1667 Bourbon Street 8882 170th Street Edmonton",
        location: "Bourbon Street 8882 170th Street Edmonton",
        totalRating: 1400,
        distance: 17.0,
      },
      {
        id: 3,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d202",
        userId: "20ab3fd9-252f-41d8-b1ff-445a1044d101",
        cityId: "20ab3fd9-252f-41d8-b1ff-445a1044d400",
        name: "Papa Johns Windermere",
        cover:
          "https://images.unsplash.com/photo-1621538997326-08eb4e59886c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3RhdXJhbnQlMjBwaXp6YXxlbnwwfHwwfHx8MA%3D%3D",
        rating: 4.3,
        cuisines: "Pizza",
        deliveryTime: 30,
        price: 49.99,
        phone: "5876867154",
        email: "customerservice@papajohns.ca",
        isClose: true,
        description:
          "The secret to success is much like the secret to making a better pizza - the more you put into it, the more you get out of it. Our pizza family is as hungry for perfection today as we were when we first opened our doors more than 30 years ago. ",
        openTime: "1000",
        closeTime: "2100",
        status: "active",
        created_at: "2024-01-27",
        updated_at: "2024-01-27",
        latitude: 53.4355,
        longitude: -113.5973,
        address: "Unit 12 5098 Windermere Boulevard NW, Edmonton, AB, Canada",
        location: "5098 Windermere Boulevard NW, Edmonton, AB, Canada",
        totalRating: 895,
        distance: 1.3,
      },
      {
        id: 4,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d203",
        userId: "20ab3fd9-252f-41d8-b1ff-445a1044d104",
        cityId: "20ab3fd9-252f-41d8-b1ff-445a1044d401",
        name: "Earls 16th Ave",
        cover:
          "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
        rating: 4.4,
        cuisines: "Canadian",
        deliveryTime: 35,
        price: 179.0,
        phone: "4032892566",
        email: "customerservice@earls.ca",
        isClose: true,
        description:
          "An approachable place made for friends to gather, families to celebrate. A restaurant where the best ingrediesnts, great service, and outstanding people are brought together",
        openTime: "1400",
        closeTime: "2200",
        status: "active",
        created_at: "2024-01-27",
        updated_at: "2024-01-27",
        latitude: 51.06732,
        longitude: -114.08581,
        address: "1110 - 16th Ave NW Calgary, AB, Canada",
        location: "1110 - 16th Ave NW Calgary, AB, Canada",
        totalRating: 995,
        distance: 3.3,
      },
      {
        id: 5,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d204",
        userId: "20ab3fd9-252f-41d8-b1ff-445a1044d101",
        cityId: "20ab3fd9-252f-41d8-b1ff-445a1044d400",
        name: "Kegs Steak House",
        cover:
          "https://plus.unsplash.com/premium_photo-1670984935550-5ce2e220977a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
        rating: 4.3,
        cuisines: "American",
        deliveryTime: 45,
        price: 199.0,
        phone: "5874542660",
        email: "customerservice@kegs.ca",
        isClose: true,
        description:
          "An accessible, upscale, and consistent dining driven by an internal culture that can only be found here. ",
        openTime: "1400",
        closeTime: "2200",
        status: "active",
        created_at: "2024-01-27",
        updated_at: "2024-01-27",
        latitude: 53.43616,
        longitude: -113.60914,
        address: "6320 Currents Drive NW Edmonton, AB, Canada",
        location: "6320 Currents Drive NW Edmonton, AB, Canada",
        totalRating: 2300,
        distance: 1.5,
      },
      {
        id: 6,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d204",
        userId: "20ab3fd9-252f-41d8-b1ff-445a1044d104",
        cityId: "20ab3fd9-252f-41d8-b1ff-445a1044d401",
        name: "Silver Dragon Restaurant",
        cover:
          "https://lh3.googleusercontent.com/p/AF1QipMOkIdFA3ggkcaprudCkd6JK2n4iUZFPw_Rjl8=s680-w680-h510",
        rating: 4.2,
        cuisines: "Chinese",
        deliveryTime: 25,
        price: 49.0,
        phone: "4032645326",
        email: "customerservice@silverdragon.ca",
        isClose: true,
        description:
          "Located in the heart of Chinatown, Silver Dragon Restaurant has served authentic Cantonese ",
        openTime: "1000",
        closeTime: "2200",
        status: "active",
        created_at: "2024-01-27",
        updated_at: "2024-01-27",
        latitude: 51.05045,
        longitude: -114.06176,
        address: "106 3rd Avenue SE Calgary, AB, Canada",
        location: "106 3rd Avenue SE Calgary, AB, Canada",
        totalRating: 1500,
        distance: 10.0,
      },
      {
        id: 8,
        uuid: "20ab3fd9-252f-41d8-b1ff-445a1044d205",
        userId: "20ab3fd9-252f-41d8-b1ff-445a1044d104",
        cityId: "20ab3fd9-252f-41d8-b1ff-445a1044d401",
        name: "Ho Won Chinese Restaurant",
        cover:
          "https://lh3.googleusercontent.com/p/AF1QipPCxRzhLk3wzCCv3GIwk5RpnlEW90IgWGdoffX8=s680-w680-h510",
        rating: 4.2,
        cuisines: "Chinese",
        deliveryTime: 25,
        price: 49.0,
        phone: "4032662234",
        email: "customerservice@howon.ca",
        isClose: true,
        description:
          "Located in the heart of Chinatown, Ho Won has served authentic Cantonese and Szechuan ",
        openTime: "1000",
        closeTime: "2200",
        status: "active",
        created_at: "2024-01-27",
        updated_at: "2024-01-27",
        latitude: 51.05123,
        longitude: -114.06176,
        address: "115 2nd Ave SE Calgary, AB, Canada",
        location: "115 2nd Ave SE Calgary, AB, Canada",
        totalRating: 780,
        distance: 9.5,
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
    await queryInterface.bulkDelete("restaurants", null, {});
  },
};
