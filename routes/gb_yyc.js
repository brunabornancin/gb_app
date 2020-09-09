var express = require('express');
var router = express.Router();

router.get('/gb_yyc', function(req, res, next) {
  res.render('gb_yyc', { title: 'GB Calgary' });
});

module.exports = router;