const Usuario = require('../model/Usuario');
const bcryptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/generadorJWT');

const login = async (req, res) => {

    const { email, password } = req.body;
    try {
        const usuarioDB = await Usuario.findOne({ where: { email } });
        // const rol = usuarioDB.dataValues.rol 
       
        if (usuarioDB) {
            const validPassword = bcryptjs.compareSync(password, usuarioDB.password);
            if (validPassword) {
                const token = await generarJWT(usuarioDB.id, usuarioDB.nombre, usuarioDB.rol);
                res.json({
                    ok: true,
                    token,
                    // rol
                })
            } else {
                return res.status(401).json({
                    ok: false,
                    msg: "Contraseña incorrecta"
                })
            }
        } else {
            return res.status(400).json({
                ok: false,
                msg: "Usuario no existe"
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "email invalido"
        })
    }

}

module.exports = {
    login
}