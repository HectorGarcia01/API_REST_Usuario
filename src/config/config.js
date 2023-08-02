require('dotenv').config({ path: `.dev.env` });
module.exports = {
    DATABASE: process.env.DATABASE,
    USERNAME: process.env.USERNAME,
    PASSWORD: process.env.PASSWORD,
    HOST: process.env.HOST
};