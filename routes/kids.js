var express = require('express');
var router = express.Router();

router.get('/kids', function(req, res, next) {
  res.render('kids', { title: 'Kids & Teens' });
});

module.exports = router;