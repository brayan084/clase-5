const { dbConnetion } = require('../database/config');
const { DataTypes } = require('sequelize');
const {Role} = require("./role");

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
    role: {
        type: DataTypes.INTEGER,
        required: true
    },
    password: {
        type: DataTypes.STRING,
        required: true
    }

},{
    timestamps: false
})

Role.hasMany(Usuario,{
    foreignKey: 'role',
})
Usuario.belongsTo(Role,{
    foreignKey: 'role',
})


// Usuario.sync({alter : true}).then(() => {
//     console.log("Table Usuario sync successfully");
// }).catch((error) => {
//     console.log("hubo un error", error);
// })
// Role.sync({alter : true}).then(() => {
//     console.log("Table Usuario sync successfully");
// }).catch((error) => {
//     console.log("hubo un error", error);
// })


module.exports = Usuario