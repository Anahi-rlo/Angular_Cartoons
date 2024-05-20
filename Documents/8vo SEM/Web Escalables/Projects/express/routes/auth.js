const { Router } = require("express");
const { login } = require("../controllers/auth");
const router = Router();


router.post("/login", login);
// router.get("/:id", getTvShowById);
// router.put("/:id",updateTvShow);
// router.delete("/:id", deleteTvShow);

//exportar router
module.exports = router;