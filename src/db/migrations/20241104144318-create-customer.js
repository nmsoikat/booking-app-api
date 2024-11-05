'use strict';

const { RoleConstant, CustomerConstant } = require('../../app/constants');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('customers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            first_name: {
                type: Sequelize.STRING(50)
            },
            last_name: {
                type: Sequelize.STRING(50)
            },
            phone: {
                type: Sequelize.STRING(50)
            },
            email: {
                type: Sequelize.STRING(150)
            },
            password: {
                type: Sequelize.STRING()
            },
            profile_img: {
                type: Sequelize.STRING(),
            },
            gender: {
                type: Sequelize.ENUM(CustomerConstant.GENDER_MALE, CustomerConstant.GENDER_FEMALE, CustomerConstant.GENDER_OTHER),
                defaultValue: CustomerConstant.GENDER_MALE
            },
            address: {
                type: Sequelize.TEXT(),
            },
            role: {
                type: Sequelize.ENUM(RoleConstant.ADMIN, RoleConstant.USER),
                defaultValue: RoleConstant.USER
            },
            created_at: {
                defaultValue: Sequelize.fn('now'),
                type: Sequelize.DATE
            },
            updated_at: {
                type: Sequelize.DATE
            },
            deleted_at: {
                type: Sequelize.DATE
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('customers');
    }
};