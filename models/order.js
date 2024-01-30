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
    static associate({ Restaurant, User, Item }) {
      // define association here
      this.belongsTo(Restaurant);
      this.belongsTo(User);
      this.belongsToMany(Item, {
        through: "OrderItem",
      });
    }
  }
  Order.init(
    {
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
      restaurantId: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      total: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      grandTotal: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
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
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
