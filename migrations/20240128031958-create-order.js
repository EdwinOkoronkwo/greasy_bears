"use strict";
const { v4: UUIDV4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("orders", {
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
      // restaurantId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   primaryKey: false,
      // },
      // address: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   defaultValue: "123 Main Street, Edmonton, AB",
      // },

      // total: {
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
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      paymentStatus: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      paymentMode: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      instruction: {
        type: DataTypes.STRING,
        allowNull: true,
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
    await queryInterface.dropTable("orders");
  },
};
