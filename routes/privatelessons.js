var express = require('express');
var router = express.Router();

router.get('/privatelessons', function(req, res, next) {
  res.render('privatelessons', { title: 'Private Lessons' });
});

module.exports = router;