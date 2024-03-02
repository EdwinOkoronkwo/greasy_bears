"use strict";
const { v4: UUIDV4 } = require("uuid");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserRestaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate({ Order, Item }) {
    //   // define association here
    //   this.belongsTo(Order);
    //   this.belongsTo(Item);
    // }
  }
  UserRestaurant.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      restaurantId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
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
      modelName: "UserRestaurant",
    }
  );
  return UserRestaurant;
};
