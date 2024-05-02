const express = require("express");
const cors = require("cors");

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Por buena practica
        this.usersPath= "/api/users";
        this.tvshowsPath= "/api/tvshows";
        this.routes();
    }

    routes() {
        //configura rutas: las peticiones q apuntan a estas rutas van a ser manejadas por esos mismos archivos
        this.app.use( this.usersPath, require("../routes/users"));
        this.app.use(this.tvshowsPath, require("../routes/tvshows"));
    }

    middlewares(){
        //ruta para informar que recibimos informacion formato json
        this.app.use(express.json);
        this.app.use(cors());

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }

}

module.exports = Server; 