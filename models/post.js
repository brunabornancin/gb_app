var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    headline: { 
        type: String,
        unique: true,
        required: true
    },
    abstract: {
        type: String,
        required: true
    },
    fulltext: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {        
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;