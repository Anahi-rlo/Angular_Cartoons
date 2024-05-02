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
            res.send("Hola desde miruta de variables de entorno");
        });

        this.app.get('/', function (req, res) {
            res.send("Hola mundo");
        });

        this.app.get('/hola-mundo', function (req, res) {
            res.send("Hola desde ruta diferente");
        });

        this.app.post('/', function (req, res) {
            res.send("Hola con post");
        });

        this.app.get('*', function (req, res) {
            res.send("no existe ruta");
        });

        this.app.post('*', function (req, res) {
            res.send("no existe ruta");
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