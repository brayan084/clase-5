const Usuario = require("../model/Usuario")
const bcrypt = require("bcryptjs")
const { generarJWT } = require("../helpers/generadorJWT")

const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const usuarioDB = await Usuario.findOne({ where: { email } })
    console.log(usuarioDB)
    if (usuarioDB) {
      const validPassword = bcrypt.compareSync(password, usuarioDB.password)

      if (!validPassword) {
        res.status(401).json({
          ok: false,
          msg: "Contraseña incorrecta",
        })
      } else {
        const token = await generarJWT(usuarioDB.id, usuarioDB.nombre)
        res.json({
          ok: true,
          token,
        })
      }
    } else {
      res.status(404).json({
        ok: false,
        msg: "No existe usuario para ese mail",
      })
    }
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      ok: false,
      msg: "Error al buscar usuario",
    })
  }
}

module.exports = {
  login,
}
