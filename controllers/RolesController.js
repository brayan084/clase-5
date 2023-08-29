const { response } = require('express')
const Role = require('../model/Roles')

const createRole = async (req, res = response) => {


    const usuario = new Role(req.body)

    await usuario.save()

    res.json({ usuario })

}

// req es el que recibe los parametros de el id de la primera tabla
const getRoles = async (req, res = response) => {
    const rol = await Role.findOne({ where: { Roleid: req } }).then((res) => {
        console.log(res.dataValues.type_role + ' res ')
        return res.dataValues.type_role
    });
    console.log(rol + ' rol')
    return rol
}

// a fin de cuentas nose porque funciona, si o si hay que pasarle los dos return 😐

module.exports = {
    createRole,
    getRoles
}