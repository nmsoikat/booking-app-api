'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Customer extends Model {

        static associate({ Event, Seat }) {
            this.hasMany(Event, { foreignKey: 'organizer_id', as: 'events' });
            this.hasMany(Seat, { foreignKey: 'customer_id', as: 'seats' });
        }
    }

    Customer.init(
        {
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            phone: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            avatar: DataTypes.STRING,
            gender: DataTypes.STRING,
            address: DataTypes.TEXT,
            role: DataTypes.STRING,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,
            deleted_at: DataTypes.DATE
        },
        {
            sequelize,
            paranoid: true,
            createdAt: false,
            updatedAt: false,
            deletedAt: 'deleted_at',
            tableName: 'customers',
            modelName: 'Customer',
            timestamps: true
        }
    );

    return Customer;
};