const {Router} = require('express');
const {check} = require('express-validator');
const {login} = require('../controllers/authController');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router()

router.post('/login',[
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('email','El email es obligatorio').isEmail(),
    validarCampos

],login)




module.exports = router;