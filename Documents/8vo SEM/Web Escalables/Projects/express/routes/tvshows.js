const { Router } = require("express");
const { getTvShows, createTvShow, updateTvShow, deleteTvShow, getTvShowById } = require("../controllers/tvshows");
const router = Router();

router.get("/", getTvShows);
router.post("/", createTvShow);
router.get("/:id", getTvShowById);
router.put("/:id",updateTvShow);
router.delete("/:id", deleteTvShow);

module.exports = router;