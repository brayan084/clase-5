const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/authController');
const { validarCampos } = require('../middlewares/validar_campos');

const router = Router();

router.post("/login", [
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    check("email", "el email es obligatorio").isEmail(),
    validarCampos
], login)

module.exports = router