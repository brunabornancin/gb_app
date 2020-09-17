var express = require('express');
var Post = require('../models/post')
var router = express.Router();

router.get('/posts/news-events', function(req, res, next) {
    Post.find(function (err, posts) {
        if (err) console.log(err)

        res.render('posts/news-events', { title: 'News & Events', posts: posts});
    });
}); 

module.exports = router;