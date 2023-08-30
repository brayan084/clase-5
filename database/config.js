const { Sequelize } = require('sequelize');

const dbConnetion = new Sequelize('backend-1', 'root', 'Dragones05@', 
{
    host: 'localhost',
    dialect: 'mysql',
})

module.exports = {dbConnetion} 