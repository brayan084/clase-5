const { Router } = require('express');
const { getUsuarios, createUsuario, updateUsuario, getUsuario } = require('../controllers/usuarioController');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar_campos');
const { validarJWT } = require('../middlewares/validar_jwt');
const { validar_createUsuarios } = require('../middlewares/validar_createUsuarios');


const router = Router();

router.get("/:id",[
    validarJWT
], getUsuario)
router.get("/",[], getUsuarios)
router.post("/",[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check("password", "La contraseña es obligatoria").isAlphanumeric(),
    check("email", "el email es obligatorio").isEmail(),
    validarCampos
], createUsuario)
router.put("/:id",[
    
], updateUsuario)

module.exports = router