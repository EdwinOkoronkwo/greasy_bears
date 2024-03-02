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
    static associate({ City, User, Item, Banner, ItemCategory }) {
      // define association here
      this.belongsTo(City);
      this.belongsToMany(User, {
        through: "UserRestaurants",
      });
      this.hasMany(Item);
      this.hasMany(Banner);
      this.hasMany(ItemCategory);
    }
  }
  Restaurant.init(
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
      cover: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cuisines: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      rating: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 4,
      },
      deliveryTime: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      price: {
        type: DataTypes.DOUBLE,
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
        defaultValue: true,
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
      restaurantAddress: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      distance: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 5,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      postalCode: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "T6W",
      },
      createdAt: {
        type: DataTypes.DATE,
        default: new Date(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        default: new Date(),
      },
      latitude: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 53,
      },
      longitude: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: -113,
      },
    },
    {
      sequelize,
      modelName: "Restaurant",
    }
  );

  Restaurant.addScope(
    "distance",
    (latitude, longitude, distance, unit = "km") => {
      const constant = unit == "km" ? 6371 : 3959;
      const haversine = `(
        ${constant} * acos(
            cos(radians(${latitude}))
            * cos(radians(latitude))
            * cos(radians(longitude) - radians(${longitude}))
            + sin(radians(${latitude})) * sin(radians(latitude))
        )
    )`;
      return {
        attributes: [[sequelize.literal(haversine), "distance"]],
        having: sequelize.literal(`distance <= ${distance}`),
      };
    }
  );

  return Restaurant;
};
