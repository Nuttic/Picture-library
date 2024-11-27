'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Pictures', [{
      picture: 'https://www.instyle.com/thmb/Vx3PhIpcwYlmPU2kIZrgUf9SykI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/nyenailslede-07dec96e417d4b11a28f3e420310249f.jpg',
      title: 'new year design',
      description: '',
      userId: 1,
      categoryId: 1,
      date: new Date(),
     }], {});
   
  },
  async down (queryInterface, Sequelize) {
  
     await queryInterface.bulkDelete('Pictures', null, {});
     
  }
};
