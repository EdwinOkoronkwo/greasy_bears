"use strict";
const { v4: UUIDV4 } = require("uuid");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Restaurant, User, Item, Address }) {
      // define association here
      this.belongsTo(Restaurant);
      this.belongsTo(User);
      this.hasOne(Address);
      this.belongsToMany(Item, {
        through: "OrderItem",
      });
    }
  }
  Order.init(
    {
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
      // address: {
      //   type: DataTypes.STRING,
      //   allowNull: true,
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
      // deliveryCharge: {
      //   type: DataTypes.DOUBLE,
      //   allowNull: false,
      // },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Complete",
      },
      paymentStatus: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Paid",
      },
      paymentMode: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Debit",
      },
      instruction: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Drop items at doorstep",
      },
      createdAt: {
        type: DataTypes.DATE,
        default: new Date(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        default: new Date(),
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
