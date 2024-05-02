const { request, response } = require("express");

//query params
const getTvShows = (req = request, res = response) => {
    const params = req.query;

    res.status(200).json({
        msg: "API tvshows GET /",
        params
    });
}

//request body
const createTvShow = (req = request, res = response) => {
    //recibir solicitud
    const body = req.body;

    //mandamos respuesta
    res.status(200).json({
        msg: "API tvshow POST /",
        body
    });
}

//url: cambiaos su ruta agregandole :id -> necesitamos cambiar la ruta
const updateTvShow = (req = request, res = response) => {
    const params = req.params;

    res.status(200).json({
        msg: "API tvshow PUT /",
        params
    });
}

const deleteTvShow = (req = request, res = response) => {
    res.status(200).json({
        msg: "API tvshow DELETE /"
    });
}

module.exports = {
    getTvShows,
    createTvShow,
    updateTvShow,
    deleteTvShow
}