const { Sequelize } = require('sequelize');

const dbConnetion = new Sequelize('clase-52', 'root', 'Dragones05@', 
{
    host: 'localhost',
    dialect: 'mysql',
})

module.exports = {dbConnetion} 