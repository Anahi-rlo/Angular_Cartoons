const { Router } = require("express");

const router = Router();

//se escribe la subruta
router.get("/", function (req, res) {
    res.status(200).json({
        msg: "API tvshows GET /"
    });
});

router.post("/", function (req, res) {
    res.status(200).json({
        msg: "API tvshows POST /"
    });
});

router.put("/", function (req, res) {
    res.status(200).json({
        msg: "API tvshows PUT /"
    });
});

router.delete("/", function (req, res) {
    res.status(200).json({
        msg: "API tvshows DELETE /"
    });
});

module.exports = router;