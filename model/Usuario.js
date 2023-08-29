const { dbConnetion } = require('../database/config');
const { DataTypes } = require('sequelize');

const Usuario = dbConnetion.define('Usuario', {
    
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        required: true
    },
    email: {
        type: DataTypes.STRING,
        required: true
    },
    password: {
        type: DataTypes.STRING,
        required: true
    },
    Roleid: {
        type: DataTypes.INTEGER,
        foreneignKey: true,
        required: true
    }

})



Usuario.sync({alter : true}).then(() => {
    console.log("Table Usuario sync successfully");
}).catch((error) => {
    console.log("hubo un error");
})


module.exports = Usuario