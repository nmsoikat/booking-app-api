'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Seat extends Model {
        static associate({ Customer, Event }) {
            this.belongsTo(Customer, { foreignKey: 'customer_id', as: 'customer' })
            this.belongsTo(Event, { foreignKey: 'event_id', as: 'event' })
        }
    }

    Seat.init(
        {
            customer_id: DataTypes.INTEGER,
            event_id: DataTypes.INTEGER,
            version: DataTypes.INTEGER,
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
            modelName: 'Seat',
            tableName: 'seats',
            timestamps: true
        }
    );

    return Seat;
};