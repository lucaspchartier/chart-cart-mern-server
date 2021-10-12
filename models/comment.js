const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    text: String,
    postId: String
});

module.exports = mongoose.model("Comment", commentSchema);