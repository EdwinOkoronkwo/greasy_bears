"use strict";
const { v4: UUIDV4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("addresses", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: false,
      },
      title: {
        type: DataTypes.STRING,

        allowNull: false,
      },
      landmark: {
        type: DataTypes.STRING,

        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,

        allowNull: false,
      },
      houseNumber: {
        type: DataTypes.STRING,

        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,

        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,

        allowNull: true,
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
