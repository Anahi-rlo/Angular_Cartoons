require('dotenv').config();
//configura todass las variabes 
const express = require("express");
const app = express();
const port = process.env.PORT;
const ruta = process.env.RUTA;

app.get(ruta, function (req, res) {
    res.send("Hola desde miruta de variables de entorno");
});
app.get('/', function (req, res) {
    res.send("Hola mundo");
});
app.get('/hola-mundo', function (req, res) {
    res.send("Hola desde ruta diferente");
});
app.post('/', function (req, res) {
    res.send("Hola con post");
});
//definida para cualquier get 
app.get('*', function (req, res) {
    res.send("no existe ruta");
});
app.post('*', function (req, res) {
    res.send("no existe ruta");
});
// app.listen(8080);
//se establece de las variables de entorno
app.listen(port);
