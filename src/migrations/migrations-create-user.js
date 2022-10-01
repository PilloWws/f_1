'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        // email: DataTypes.STRING,
        // firstName: DataTypes.STRING,
        // password: DataTypes.STRING,
        // lastName: DataTypes.STRING,
        // address: DataTypes.STRING,
        // gender: DataTypes.BOOLEAN,
        // roleId: DataTypes.STRING
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      address:{
        type: Sequelize.STRING
      },
      gender:{
        type: Sequelize.BOOLEAN
      },
      roleId: {
        type: Sequelize.STRING
      },
      phonenumber:{
        type: Sequelize.STRING
      },
      positionId:{
        type: Sequelize.STRING
      },
      image:{
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};