// post.js
const mongoose = require('mongoose'); // 올바르게 mongoose를 가져와야 합니다.

const { Schema } = mongoose;

const PostSchema = new Schema({
    title: String,
    body: String,
    tags: [String],
    publishedDate: {
        type: Date,
        default: Date.now,
    },
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
