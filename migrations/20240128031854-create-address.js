"use strict";
const { v4: UUIDV4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("addresses", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },

      title: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      landmark: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      houseNumber: {
        type: DataTypes.STRING,

        allowNull: true,
        defaultValue: "",
      },
      createdAt: {
        type: DataTypes.DATE,
        default: new Date(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        default: new Date(),
      },
      lat: {
        type: DataTypes.DOUBLE,

        allowNull: true,
      },
      lng: {
        type: DataTypes.DOUBLE,

        allowNull: true,
      },
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("addresses");
  },
};
