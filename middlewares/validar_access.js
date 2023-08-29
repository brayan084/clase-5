const jwt = require('jsonwebtoken');

function validar_rol(requiredRole) {
    return (req, res, next) => {

        const token = req.header('Authorization').replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ message: 'Token no proporcionado' });
        }


        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Token inválido' });
            }


            if (decoded.rol !== requiredRole) {
                return res.status(403).json({ message: 'Acceso no autorizado' });
            }


            next();
        });
    };
}

module.exports = { validar_rol };
