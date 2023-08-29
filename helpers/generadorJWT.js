const jwt = require('jsonwebtoken');

const generarJWT = (id, nombre, rol) => {

    return new Promise((resolve, reject) => {
        const payload = {id, nombre, rol};

        jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '2h'
        },(err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token');
            } else {
                resolve(token);
            }
        })
    })

}

module.exports = {
    generarJWT
}