const express = require("express");

class Server {

    //constructor q definimos express, el puerto de las variables de entorno
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //cuando inicialice el objeto tambien las funciones
        //instanciamos, se configuran automaticmente
        this.routes();
    }

    //metodo donde registramos todas las rutas
    routes() {
        this.app.get(process.env.RUTA, function (req, res) {
            res.status(200).json({
                msg: "API GET /"
            });
        });

        this.app.get('/', function (req, res) {
            res.status(200).json({
                msg: "API GET /"
            });
        });

        this.app.get('/hola-mundo', function (req, res) {
            res.status(200).json({
                msg: "API GET /"
            });
        });

        this.app.post('/', function (req, res) {
            res.status(200).json({
                msg: "API POST /"
            });
        });

        this.app.get('*', function (req, res) {
            res.status(404).json({
                msg: "Error ruta no encontrada"
            });
        });

        this.app.post('*', function (req, res) {
            res.status(404).json({
                msg: "Error ruta no encontrada"
            });
        });
    }

    //no podemos instanciar 
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }

}

module.exports = Server; 