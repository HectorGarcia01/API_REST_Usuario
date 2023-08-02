require('dotenv').config({ path: `.dev.env` });
module.exports = {
    DATABASE: process.env.DATABASE,
    DB_USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.PASSWORD,
    HOST: process.env.HOST
};