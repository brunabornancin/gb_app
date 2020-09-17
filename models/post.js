var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: { 
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    img: {        
        type: String,
        required: true
    },
},
{
   timestamps: true
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;