const { Sequelize } = require('sequelize');

const dbConnection = new Sequelize('clase-5', 'root', 'Dragones05@',
{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {dbConnection};