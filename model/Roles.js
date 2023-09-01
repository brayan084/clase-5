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
    }
}, {
    timestamps: false
})


Role.sync({alter : true}).then(() => {
    console.log("Table Role sync successfully");
}).catch((error) => {
    console.log("no se puede sincronizar la tabla " + error);
})

module.exports = Role