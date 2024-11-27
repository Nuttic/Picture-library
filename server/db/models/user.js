'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
  
    static associate({Picture}) {
      this.hasMany(Picture, {foreignKey: 'userId'})
    }
  }
  User.init({
    username: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    email: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};