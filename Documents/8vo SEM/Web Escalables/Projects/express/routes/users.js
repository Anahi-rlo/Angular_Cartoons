const { Router } = require("express");

const router = Router();

//se escribe la subruta
router.get("/", function (req, res) {
    res.status(200).json({
        msg: "API users GET /"
    });
});

router.post("/", function (req, res) {
    res.status(200).json({
        msg: "API users POST /"
    });
});

router.put("/", function (req, res) {
    res.status(200).json({
        msg: "API users PUT /"
    });
});

router.delete("/", function (req, res) {
    res.status(200).json({
        msg: "API users DELETE /"
    });
});

module.exports = router;