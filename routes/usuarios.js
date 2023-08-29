const { Router } = require('express');
const { getUsuarios, createUsuario, updateUsuario } = require('../controllers/usuarioController');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar_campos');
const { validarJWT } = require('../middlewares/validar_jwt');
const { validar_rol } = require('../middlewares/validar_access');

const router = Router();

router.get("/",[
    // validarJWT,
    // validar_rol('ROLE_USUARIOS'),
], getUsuarios)
router.post("/",[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    check("email", "el email es obligatorio").isEmail(),
    validarCampos
], createUsuario)
router.put("/:id",[
    
], updateUsuario)

module.exports = router