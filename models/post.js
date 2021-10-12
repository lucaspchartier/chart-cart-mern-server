const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    text: String
});

module.exports = mongoose.model("Post", postSchema);