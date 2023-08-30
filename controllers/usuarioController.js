const { response } = require('express');
const bcrypt = require('bcryptjs');

const Usuario = require('../model/Usuario');

const { generarJWT } = require('../helpers/generadorJWT');


const getUsuarios = async (req, res = response) => { 

    console.log(req.id)
    const usuarios = await Usuario.findAll()

    res.json(usuarios)

}


const createUsuario = async (req, res = response) => {

    // if (!req.body.password) {
    //     return res.status(500).json({ 
    //         ok: false,
    //         msg: "El password es obligatorio"
    //     })
    // }

    // if (!req.body.nombre) {
    //     return res.status(500).json({ 
    //         ok: false,
    //         msg: "El nombre es obligatorio"
    //     })
    // }

    // if (!req.body.email) {
    //     return res.status(500).json({ 
    //         ok: false,
    //         msg: "El email es obligatorio"
    //     })
    // }

    const usuario = new Usuario(req.body)

    const salt = bcrypt.genSaltSync()
    usuario.password = bcrypt.hashSync(usuario.password, salt)

    const u = await usuario.save()



    const token = await generarJWT(u.id, u.nombre)


    res.json({token,
        usuario})

 }

 const updateUsuario = async (req, res = response) => { 

    const id = req.params.id

    try {

        const usuarioDB = await Usuario.findByPk(id)

        if (!usuarioDB) {
            return res.status(201).json({
                ok: false,
                msg: 'No existe un usuario con ese id'
            })
        }

        const { password, nombre, img, role } = req.body

        if (password) {
            const salt = bcrypt.genSaltSync()
            usuarioDB.password = bcrypt.hashSync(usuario.password, salt)
        }

        if (nombre) {
            usuarioDB.nombre = nombre
        }

        if (img) {
            usuarioDB.img = img
        }   

        if (role)  {
            usuarioDB.role = role
        }

        await usuarioDB.save()

        res.json(usuarioDB)

    } catch (error) {
        console.log(error)

        res.status(500).json({ 
            ok: false,
            msg: "Error interno"
        })
    }

 }

 module.exports = {
    getUsuarios,
    createUsuario,
    updateUsuario
 }
