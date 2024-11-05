'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Event extends Model {
        static associate({ Customer, Seat }) {
            this.belongsTo(Customer, { foreignKey: 'organizer_id', as: 'organizer' });
            this.hasMany(Seat, { foreignKey: 'event_id', as: 'seats' });
        }
    }

    Event.init(
        {
            title: DataTypes.STRING,
            description: DataTypes.TEXT,
            location: DataTypes.STRING,
            start_time: DataTypes.DATE,
            end_time: DataTypes.DATE,
            organizer_id: DataTypes.INTEGER,
            total_seat: DataTypes.INTEGER,
            sold_out_seat: DataTypes.INTEGER,
            thumbnail: DataTypes.STRING,
            banner: DataTypes.STRING,
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
            modelName: 'Event',
            tableName: 'events',
            timestamps: true
        }
    );

    return Event;
};