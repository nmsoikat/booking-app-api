require('dotenv').config('../../.env');
const env = process.env
module.exports = {
    development: {
        username: env.DB_USER,
        password: env.DB_PASSWORD,
        database: env.DB_NAME,
        host: env.DB_HOST,
        port: env.DB_PORT,
        dialect: env.DB_DIALECT,
        logging: false,
        define: {
            underscored: true
        }
    },

    staging: {
        username: env.DB_USER,
        password: env.DB_PASSWORD,
        database: env.DB_NAME,
        host: env.DB_HOST,
        port: env.DB_PORT,
        dialect: env.DB_DIALECT,
        logging: false,
        define: {
            underscored: true
        }
    },

    production: {
        username: env.DB_USER,
        password: env.DB_PASSWORD,
        database: env.DB_NAME,
        host: env.DB_HOST,
        port: env.DB_PORT,
        dialect: env.DB_DIALECT,
        logging: false,
        define: {
            underscored: true
        }
    }
}
