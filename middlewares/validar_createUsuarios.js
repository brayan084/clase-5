const { check } = require('express-validator');
const {validationResult} = require('express-validator');

const validar_createUsuarios = (req, res, next) => {

    const error = [
        check('nombre')
            .not()
            .isEmpty()
            .isLength({ min: 3 })
            .custom((value, { req }) => {
                if (value.length < 3) {
                    throw new Error('El nombre debe tener al menos 3 caracteres');
                }
                return true
            }),
        check('email')
            .exists()
            .isEmail(),
        check('password')
            .exists()
            .isAlphanumeric()
            .custom((value, { req }) => {
                if(value.length < 6) {
                    throw new Error('La contraseña debe tener al menos 6 caracteres');
                }
                return true
            }),
        check('role')
            .exists()
            .isNumeric(),
    ]

     
    const errores = validationResult(error)

    if (!errores.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errores
        })
    }



    
    next()

}

module.exports = {
    validar_createUsuarios,
}