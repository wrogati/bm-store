"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
     return queryInterface.bulkInsert('Customers', [{
      firstName: "Jack",
      lastName: "Ryan",
      email: "jack.ryan@mail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Paul",
      lastName: "Servants",
      email: "paul.servants@mail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Kim",
      lastName: "Smith",
      email: "kim.smith@mail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Customers', null, {});
  },
};
