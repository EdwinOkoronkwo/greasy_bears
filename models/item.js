"use strict";
const { v4: UUIDV4 } = require("uuid");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ ItemCategory, Cart, Order, Restaurant, User }) {
      // define association here
      this.belongsTo(ItemCategory);
      this.belongsTo(User);
      this.belongsTo(Restaurant);
      this.belongsToMany(Order, {
        through: "OrderItem",
      });
      this.belongsToMany(Cart, {
        through: "CartItem",
      });
    }
  }
  Item.init(
    {
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
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cover: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
      },
      isVeg: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
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
      modelName: "Item",
    }
  );
  return Item;
};
