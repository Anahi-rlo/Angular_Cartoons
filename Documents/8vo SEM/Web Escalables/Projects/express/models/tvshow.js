const mongoose = require("mongoose");

const tvShowSchema = mongoose.Schema({
    title: String,
    year: Number,
    episodes: Number,
    image : String,
    id: Number
})


module.exports= mongoose.model("TvShow",tvShowSchema);