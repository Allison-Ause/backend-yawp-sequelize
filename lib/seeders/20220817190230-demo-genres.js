'use strict';
const db = require('../models');

module.exports = {
  async up() {
    //took out parameter (queryInterface)
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await db.Genre.bulkCreate([
      {
        name: 'Action',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Burton-esque',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Horror',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Comedy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down() {
    //queryInterface, Sequelize
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
