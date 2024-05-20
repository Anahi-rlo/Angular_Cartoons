const jwt = require("jsonwebtoken");

// Generamos un token a partir de la id del usuario con una llave secreta, es una cadena propia
// La validación es de 4 horas
// Si el error tiene valor es que hay un error
const generateJWT = (id = "") => {
    return new Promise((resolve, reject) => {
        const payload = { id };
        jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "4h" }, (error, token) => {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                resolve(token);
            }
        });
    });
}

module.exports = {
    generateJWT
}
