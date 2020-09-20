var express = require('express');
var Post = require('../models/post');
var router = express.Router();

router.get('/posts/all-posts', function(req, res, next) {
    Post.find(function (err, posts) {
        if (err) console.log(err);
        res.render('posts/all-posts', { title: 'News & Events', posts: posts});
    });
});

router.get('/:id', function(req, res) {
    var Post = Post.findById(req.params.id, function(error, post) {
        if(err) console.log(err);
        res.render('detail/post.id', { post: post})
    });
});

module.exports = router;