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
    rol: {
        type: DataTypes.STRING,
        defaultValue: "role user",
        required: true

    }

})

Usuario.sync({alter : true}).then(() => {
    console.log("Table sync successfully");
}).catch((error) => {
    console.log(error);
})

module.exports = Usuario