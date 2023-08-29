const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/authController');
const { validarCampos } = require('../middlewares/validar_campos');
// const { validar_rol } = require('../middlewares/validar_access');

const router = Router();

router.post("/login", [
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    check("email", "el email es obligatorio").isEmail(),
    validarCampos,
    // validar_rol('access')
], login)

module.exports = router