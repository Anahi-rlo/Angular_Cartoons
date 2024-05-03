const { request, response } = require("express");
const TvShow = require("../models/tvshow.js");

//query params- buscar varios
const getTvShows = (req = request, res = response) => {
    const { searchTerm } = req.query;

    TvShow.find({ title: RegExp(searchTerm) }).then(
        (result) => {
            res.status(200).json({
                msg: "API TvShow GET /",
                result: result
            });
        }
    ).catch(
        (error) => {
            res.status(500).json({
                msg: "Error al obtener los datos",
                result: []
            });
        }
    );
}

//url- buscar uno solo
const getTvShowById = (req = request, res = response) => {
    const { id } = req.params;

    TvShow.findOne({ id: id }).then(
        (result) => {
            res.status(200).json({
                msg: "API TvShow GET by Id /",
                result
            });
        }).catch((error) => {
            res.status(500).json({
                msg: "Error al obtener los datos",
                result: null
            });
        });
};

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
    getTvShowById,
    createTvShow,
    updateTvShow,
    deleteTvShow
}