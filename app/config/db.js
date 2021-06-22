// calling dotenv again for configuration integrity while use sequelize-cli
require('dotenv').config();

const DB_CONFIG = {
    url: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: process.env.DB_DILECT,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

// console.log(JSON.stringify(DB_CONFIG, null, 4));

module.exports = DB_CONFIG;