'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Achievement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_Achievement.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    achievementId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    finished: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User_Achievement',
  });
  return User_Achievement;
};