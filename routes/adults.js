var express = require('express');
var router = express.Router();

router.get('/adults', function(req, res, next) {
  res.render('adults', { title: 'Adults' });
});

module.exports = router;