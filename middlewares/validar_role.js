const jwt = require('jsonwebtoken');
const { getRoles } = require('../controllers/RolesController');

function validar_rol(Acceso) {
    return (req, res, next) => {

        const token = req.header('Authorization').replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ message: 'Token no proporcionado' });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {

            if (err) {
                return res.status(401).json({ message: 'Token inválido' });
            }
            // esta funcion trae el rol de la segunda tabla
            async function get() {
                const clave = await getRoles(decoded.Roleid)
                return clave
            }
                // aqui se compara el rol para saber si tiene acceso
                get().then((datos) => {
                    console.log(datos + ' query ')
                    console.log(Acceso + ' Acceso')
                    if (datos !== Acceso) {
                        return res.status(403).json({ message: 'Acceso no autorizado' });
                    } else {
                        next();
                    }
                });


            });

    }
}

module.exports = { validar_rol };
