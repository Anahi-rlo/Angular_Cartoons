const express = require("express");

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
        // el / es de subrutas, la 1er parte 
        this.app.use( this.usersPath, require("../routes/users"));
        this.app.use(this.tvshowsPath, require("../routes/tvshows"));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }

}

module.exports = Server; 