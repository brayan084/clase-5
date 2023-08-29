const { dbConnetion } = require('../database/config');
const { DataTypes } = require('sequelize');


const Role = dbConnetion.define('Role', {
    Roleid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type_role: {
        type: DataTypes.STRING,
        required: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
})

Role.sync({alter : true}).then(() => {
    console.log("Table Role sync successfully");
}).catch((error) => {
    console.log("no se puede sincronizar la tabla " + error);
})

module.exports = Role