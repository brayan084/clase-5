const {response} = require('express')
const {Role} = require('../model/role')

const getRole = async (req, res = response) => {
    try {
        const rol = await Role.findAll()
        res.json(rol)
    } catch (error) {
        console.log(error)
    }
}

const createRole = async (req, res = response) => {
    try {
        const role = new Role(req.body)
        await role.save()
        res.json(role)

    } catch (error) {
        console.log(error)
    }
}

const deleteRole = async (req, res = response) => {
    try {
        const id = req.params.id
        const role = await Role.destroy({where: {id}})
        res.status(200).end()

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getRole,
    createRole,
    deleteRole
}