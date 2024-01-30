"use strict";
const { v4: UUIDV4 } = require("uuid");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ City, User, Order }) {
      // define association here
      this.belongsTo(City);
      this.belongsToMany(User, {
        through: "UserRestaurants",
      });
      this.hasMany(Order);
    }
  }
  Restaurant.init(
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
      cover: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cuisines: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      deliveryTime: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      price: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isClose: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      openTime: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      closeTime: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cityId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      distance: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      totalRating: {
        type: DataTypes.NUMBER,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      latitude: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      longitude: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Restaurant",
    }
  );
  return Restaurant;
};
