require('dotenv').config();

const Server = require("./models/server"); 

//generamos nuestro objeto 
const server = new Server(); 

//levantamos servicio 
server.listen();