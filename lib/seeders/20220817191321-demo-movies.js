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
    await db.Movies.bulkCreate([
      {
        title: 'Pointe Break',
        description: 'Dope as hell',
        image: 'http://someurl.com',
        releaseYear: 1995,
        genreId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Nightmare Before Christmas',
        description: 'Halloween AND Holiday!',
        image: 'http://someotherurl.com',
        releaseYear: 1991,
        genreId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'X',
        description: 'Terrifying old school porno',
        image: 'http://someotherurl2.com',
        releaseYear: 2022,
        genreId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Cheech and Chong',
        description: 'Righteous',
        image: 'http://someotherurl420.com',
        releaseYear: 1979,
        genreId: 4,
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
