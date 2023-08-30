const { dbConnection } = require("../database/config")
const { DataTypes } = require("sequelize")

const Usuario = dbConnection.define("Usuario", {
  nombre: {
    type: DataTypes.STRING,
    required: true,
  },
  password: {
    type: DataTypes.STRING,
    required: true,
  },
  email: {
    type: DataTypes.STRING,
    required: true,
    unique: true
  },
  img: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
    required: true,
    defaultValue: "USER_ROLE",
  },
})

Usuario.sync({ alter: true })
  .then(() => {
    console.log("Tabla de usuarios sincronizada")
  })
  .catch((error) => console.log(error))


module.exports = Usuario