'use strict';
const bcrypt = require('bcrypt')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Users', [{
        username: 'netta',
        email: 'n@t.com',
        password: await bcrypt.hash('777', 10),
      }], {});
  
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Users', null, {});
     
  }
};
