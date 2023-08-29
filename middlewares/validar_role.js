const jwt = require('jsonwebtoken');
// const { getRoles } = require('../controllers/RolesController');


function validar_rol() {
    return (req, res, next) => {
        
        // console.log(getRoles());
        const token = req.header('Authorization').replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ message: 'Token no proporcionado' });
        }


        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Token inválido' });
            }

            if ( decoded.Roleid !== Number(2)) {
                return res.status(403).json({ message: 'Acceso no autorizado' });
            }


            next();
        });
    };
}

module.exports = { validar_rol };
