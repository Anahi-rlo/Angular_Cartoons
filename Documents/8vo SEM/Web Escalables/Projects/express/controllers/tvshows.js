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
    const { title, year, episodes, image, id } = req.body;

    if (!title || !episodes || !id) {
        //validación de que estan todos
        res.status(400).json({
            msg: "Faltan datos"
        })
        return;
    }

    const newTvShow = TvShow({
        title,
        year,
        episodes,
        image,
        id
    })

    newTvShow.save().then(() => {
        res.status(200).json({
            msg: "Elemento insertado con exito"
        });
    }).catch(() => {
        res.status(500).json({
            msg: "Error al insertar el elemento"
        });
    })
};

//url: cambiaos su ruta agregandole :id -> necesitamos cambiar la ruta
const updateTvShow = (req = request, res = response) => {
    // const { id } = req.params;
    const { id, title, year, episodes, image } = req.body;

    if (!title || !episodes  || !id) {
        res.status(400).json({
            msg: "Faltan datos"
        })
        return;
    }

    TvShow.updateOne({ id: id }, { title: title, year: year, episodes: episodes, image: image }).then(() => {
        res.status(200).json({
            msg: "Elemento actualizado con exito"
        });
    }).catch(() => {
        res.status(500).json({
            msg: "Error al actualizar el elemento"
        });
    })
}

//url
const deleteTvShow = (req = request, res = response) => {
    const { id } = req.params;

    TvShow.deleteOne({ id: id }).then(() => {
        res.status(200).json({
            msg: "Elemento eliminado con exito"
        });
    }).catch(() => {
        res.status(500).json({
            msg: "Error al eliminar el elemento"
        });
    })
}

module.exports = {
    getTvShows,
    getTvShowById,
    createTvShow,
    updateTvShow,
    deleteTvShow
}