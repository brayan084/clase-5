const { dbConnetion } = require('../database/config')
const { DataTypes } = require("sequelize")

const Role = dbConnetion.define("Role", {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "no tengo rol",
    },
    description: {
        type: DataTypes.STRING,
        defaultValue: "no tengo descripcion"
    }
}, {
    timestamps: false
})



module.exports = {
    Role
}