const { request, response } = require("express");
const User = require("../models/user");
const { generateJWT } = require("../helpers/jwt");

//query params- buscar varios
const login = (req = request, res = response) => {

    const { user, password } = req.body;

    if (!user || !password) {
        //validación de que estan todos
        return  res.status(400).json({
            msg: "Faltan datos"
        });
    }

    //Condicional para todos los usuarios
    //Validamos el uso de la contraseña
    User.findOne({ user: user, password: password }).then(
        (result) => {
            //si los datos corresponden a un usuario
            if (result) {
                //me regresa la promesa de q me manda un token y se genera
                generateJWT(user).then((token) => {
                    res.status(200).json({
                        msg: "login ok",
                        //tokn de respuesta
                        token
                    });
                }).catch((error) => {
                    res.status(500).json({
                        msg: error
                    });
                })
            } else {
                res.status(401).json({
                    msg: "Datos incorrectos"
                });
            }
        }
    ).catch((error) => {
        res.status(500).json({
            msg: "Error al iniciar sesión",
        });
    })
}


module.exports = {
    login
}