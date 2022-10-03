"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("SaleItems", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      unitPrice: {
        type: Sequelize.INTEGER,
      },
      daysOfRent: {
        type: Sequelize.INTEGER,
      },
      typeOfSale: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addColumn("SaleItems", "productId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Products",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      defaultValue: null,
    });

    await queryInterface.addColumn("SaleItems", "saleId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Sales",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      defaultValue: null,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("SaleItems");
  },
};
