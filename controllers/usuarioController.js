const {response} = require('express')
const bcryptjs = require('bcryptjs')
const { generarJWT } = require('../helpers/generadorJWT')

const Usuario = require('../model/Usuario')
const Role = require('../model/Usuario')

const getUsuarios = async (req, res = response) => {
    
    const usuarios = await Usuario.findAll()
    const roles = await Role.findAll()
    console.log(roles)

    res.json({
        ok: true,
        usuarios
    })
}

const createUsuario = async (req, res = response) => {
    

    const usuario = new Usuario(req.body)

    const salt = bcryptjs.genSaltSync()
    usuario.password = bcryptjs.hashSync(req.body.password, salt)
    
    await usuario.save()
    const token = await generarJWT(usuario.id, usuario.nombre, usuario.rol)

    res.json({token, usuario})

}

const updateUsuario = async (req, res = response) => {
    
    const id = req.body.id

    try {
        const usuarioDB = await Usuario.findById(id)

        if(!usuarioDB){
            return res.status(201).json({
                ok: false,
                message: "No existe el usuario con ese id",
            })
        }

        const {password, nombre, rol} = req.body

        if (password){
            const salt = bcryptjs.genSaltSync()
            req.body.password = bcryptjs.hashSync(password, salt)
        }

        if (nombre){
            req.body.nombre = nombre
        }

        if (rol){
            req.body.rol = rol
        }

        await usuarioDB.save()

        res.json(usuarioDB)

    } catch (error) {
        console.error(error)
        res.status(500).json({
            ok: false,
            message: "Error inesperado"
        })
    }

}

module.exports = {
    createUsuario,
    getUsuarios,
    updateUsuario
}