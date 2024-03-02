"use strict";
const { v4: UUIDV4 } = require("uuid");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Item }) {
      // define association here
      this.belongsTo(User);
      this.belongsToMany(Item, {
        through: "CartItem",
      });
    }
  }
  Cart.init(
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
        allowNull: true,
        defaultValue: 10,
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
      modelName: "Cart",
    }
  );
  return Cart;
};
