const { Sequelize } = require('sequelize');
const { DATABASE, DB_USERNAME, PASSWORD, HOST } = require('../config/config')

const db = new Sequelize(DATABASE, DB_USERNAME, PASSWORD, {
    host: HOST,
    dialect: 'mysql'
});

module.exports = db