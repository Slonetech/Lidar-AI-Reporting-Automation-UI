'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AuditLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AuditLog.init({
    action: DataTypes.STRING,
    report_id: DataTypes.INTEGER,
    user: DataTypes.STRING,
    status: DataTypes.STRING,
    message: DataTypes.STRING,
    timestamp: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'AuditLog',
  });
  return AuditLog;
};