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
    static associate({ User }) {
      // define association here
      this.belongsTo(User);
    }
  }
  Address.init(
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
      title: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      landmark: {
        type: DataTypes.STRING,

        allowNull: true,
        defaultValue: "",
      },
      address: {
        type: DataTypes.STRING,

        allowNull: true,
        defaultValue: "",
      },
      houseNumber: {
        type: DataTypes.STRING,

        allowNull: true,
        defaultValue: "",
      },
      createdAt: {
        type: DataTypes.DATE,
        default: new Date(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        default: new Date(),
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
