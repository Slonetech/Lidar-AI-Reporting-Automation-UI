'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Member.init({
    full_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    dob: DataTypes.DATE,
    county: DataTypes.STRING,
    occupation: DataTypes.STRING,
    joined_at: DataTypes.DATE,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Member',
  });
  return Member;
};