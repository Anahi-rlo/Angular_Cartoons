const { request, response } = require("express");

//dfinimos que son request y response para tener todas sus funciones de express
const getTvShows = (req = request, res = response) => {
    res.status(200).json({
        msg: "API tvshows GET /"
    });
}

const createTvShow = (req = request, res = response) => {
    res.status(200).json({
        msg: "API tvshow POST /"
    });
}

const updateTvShow = (req = request, res = response) => {
    res.status(200).json({
        msg: "API tvshow PUT /"
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