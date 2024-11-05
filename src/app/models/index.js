'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const NODE_ENV = process.env.NODE_ENV || 'development';

const db = {};
const basename = path.basename(__filename);
const config = require(__dirname + '/../../configs/config')[NODE_ENV];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-3) === '.js' &&
            file.indexOf('.test.js') === -1
        );
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

sequelize.authenticate()
    .then(() => {
        console.log(`${sequelize.config.database} DB Connected Successfully.`);
    })
    .catch((error) => {
        console.error(`Unable to connect the DB : ${error}`);
    });


db.sequelize = sequelize;
module.exports = db;