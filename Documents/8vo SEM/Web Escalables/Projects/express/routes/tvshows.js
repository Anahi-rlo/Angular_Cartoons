const { Router } = require("express");
const { getTvShows, createTvShow, updateTvShow, deleteTvShow } = require("../controllers/tvshows");
const router = Router();

router.get("/", getTvShows);
router.post("/", createTvShow);
router.put("/",updateTvShow);
router.delete("/", deleteTvShow);

module.exports = router;