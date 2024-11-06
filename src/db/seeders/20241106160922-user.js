'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('customers', [
            {
                first_name: 'user',
                last_name: 'test',
                email: 'user@mail.com',
                password: '$2a$10$zJj5eVpL4wVjQyaRupvohuSAuDCRHp1a9uHK30kbjA6iZJ51p0NY6', //123456
                role: 'user'
            },
            {
                first_name: 'admin',
                last_name: 'test',
                email: 'admin@mail.com',
                password: '$2a$10$sIGy4z08E/cYAFoOUAP1OOssz3GpIHsRJoBSE1gfJJ9b2MYVlCF6a', //admin123456
                role: 'admin'
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('customers', null, {});
    }
};
