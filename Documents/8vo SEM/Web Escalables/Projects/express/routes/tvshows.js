const { Router } = require("express");
const { getTvShows, createTvShow, updateTvShow, deleteTvShow } = require("../controllers/tvshows");
const router = Router();

router.get("/", getTvShows);
router.post("/", createTvShow);
//: para que sea un valor, no palabra
router.put("/:id",updateTvShow);
router.delete("/", deleteTvShow);

module.exports = router;