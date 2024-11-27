'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
  
    static associate({Picture}) {
      this.hasMany(Picture, {foreignKey: 'categoryId'})
    }
  }
  Category.init({
    title: {
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};