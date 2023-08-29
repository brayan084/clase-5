const {response} = require('express')
const Role = require('../model/Roles')

const createRole = async (req, res = response) => {
    

    const usuario = new Role(req.body)
 
    await usuario.save()

    res.json({usuario})

}

// const getRoles = async (req, res = response) => {
//     const rol = await Role.findOne({ where: { Roleid: 2 } });

//     return rol
// }

module.exports = {
    createRole
}