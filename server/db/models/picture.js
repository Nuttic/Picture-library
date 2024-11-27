'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Picture extends Model {
    static associate({User, Category}) {
      this.belongsTo(User, {foreignKey: 'userId'})
      this.belongsTo(Category, {foreignKey: 'categoryId'})
    }
  }
  Picture.init({
    picture: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    title: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "Category",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    date: {
      allowNull: false,
      defaultValue: new Date(),
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    modelName: 'Picture',
  });
  return Picture;
};