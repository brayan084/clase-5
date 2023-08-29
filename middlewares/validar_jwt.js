const jwt = require('jsonwebtoken');

const validarJWT = (req, res, next) => {

    const token = req.header('authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {
        const {id, nombre, rol} = jwt.verify(token, process.env.JWT_SECRET);
        req.id = id;
        // console.log(id, nombre, rol);
        next();
    }catch (error) {
        console.log(error);
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        })   
    }


}

module.exports = {
    validarJWT,
}