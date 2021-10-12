const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    postId: String,
    text: String
});

module.exports = mongoose.model("Comment", commentSchema);