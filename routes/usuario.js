const express = require('express');

const { getUsuarios, createUsuario, updateUsuario } = require('../controllers/usuarioController');

const {check} = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validadorJWT');

const router = express.Router();

router.get('/',[validarJWT],  getUsuarios)
router.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('email','El email es obligatorio').isEmail(),
    validarCampos
], createUsuario)

router.put('/:id',[], updateUsuario)
// router.delete('/:id', deleteUsuario)


module.exports = router;