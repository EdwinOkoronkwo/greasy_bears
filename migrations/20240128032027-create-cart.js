"use strict";
const { v4: UUIDV4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("carts", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      // userId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   primaryKey: false,
      // },
      // totalItems: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },
      // totalPrice: {
      //   type: DataTypes.DOUBLE,
      //   allowNull: false,
      // },
      // grandTotal: {
      //   type: DataTypes.DOUBLE,
      //   allowNull: false,
      // },
      deliveryCharge: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        default: new Date(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        default: new Date(),
      },
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("carts");
  },
};
