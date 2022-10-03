'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SaleItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SaleItems.init({
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    unitPrice: DataTypes.INTEGER,
    daysOfRent: DataTypes.INTEGER,
    typeOfSale: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SaleItems',
  });
  return SaleItems;
};