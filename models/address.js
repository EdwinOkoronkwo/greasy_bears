"use strict";
const { v4: UUIDV4 } = require("uuid");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Address.init(
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
    },
    {
      sequelize,
      modelName: "Address",
    }
  );
  return Address;
};
