const { Sequelize } = require('sequelize');
const { DATABASE, USERNAME, PASSWORD, HOST } = require('../config/config')

const db = new Sequelize(DATABASE, USERNAME, PASSWORD, {
    host: HOST,
    dialect: 'mysql'
});