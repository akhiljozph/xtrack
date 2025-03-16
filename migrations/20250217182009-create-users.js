'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      email_address: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      mobile_number: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
        validate: {
          isNumeric: true,
          len: [10, 15],
        },
      },
      biological_sex: {
        type: Sequelize.ENUM('FEMALE', 'MALE', 'OTHERS'),
        allowNull: false,
        defaultValue: 'OTHERS',
      },
      account_type: {
        type: Sequelize.ENUM('GLOBAL_ADMIN', 'GROUP_ADMIN', 'GROUP_MEMBER'),
        allowNull: false,
        defaultValue: 'GROUP_MEMBER',
      },
      invitation_status: {
        type: Sequelize.ENUM('INVITED', 'PENDING', 'CONFIRMED'),
        allowNull: false,
        defaultValue: 'INVITED',
      },
      account_status: {
        type: Sequelize.ENUM('INVITED', 'ACTIVE', 'BLOCKED', 'DELETED'),
        allowNull: false,
        defaultValue: 'INVITED',
      },
      user_password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      is_user_blocked: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      blocked_reason: {
        type: Sequelize.STRING,
        allowNull: true,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
