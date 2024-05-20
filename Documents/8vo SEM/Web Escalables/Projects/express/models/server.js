const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        //direccion de  una variable de entorno
        this.connection_string = process.env.CONNECTION_STRING;


        this.usersPath = "/api/users";
        this.tvshowsPath = "/api/tvshows";
        this.authPath = "/api/auth";

        this.middlewares();
        this.routes();
        this.db();
    }

    routes() {
        //configura rutas: las peticiones q apuntan a estas rutas van a ser manejadas por esos mismos archivos
        this.app.use(this.usersPath, require("../routes/users"));
        this.app.use(this.tvshowsPath, require("../routes/tvshows"));
        this.app.use(this.authPath, require("../routes/auth"));
    }

    middlewares() {
        //ruta para informar que recibimos informacion formato json
        this.app.use(express.json());
        this.app.use(cors());

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }

    db() {
        mongoose.connect(this.connection_string).then(
            () => {
                console.log("Conexion exitosa con la base de datos");
            }
        ).catch(//caso contrario de que no se cargue
            (error) => {
                console.log("Error al conectar copn la db");
            }
        )
    }
}

module.exports = Server; 