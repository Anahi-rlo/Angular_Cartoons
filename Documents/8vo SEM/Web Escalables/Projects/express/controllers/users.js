const { request, response } = require("express");

//dfinimos que son request y response para tener todas sus funciones de express
const getUsers = (req = request, res = response) => {
    res.status(200).json({
        msg: "API users GET /"
    });
}

const createUser = (req = request, res = response) => {
    res.status(200).json({
        msg: "API users POST /"
    });
}

const updateUser = (req = request, res = response) => {
    res.status(200).json({
        msg: "API users PUT /"
    });
}

const deleteUser = (req = request, res = response) => {
    res.status(200).json({
        msg: "API users DELETE /"
    });
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}