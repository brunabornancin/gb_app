var express = require('express');
var router = express.Router();

router.get('/instructors', function(req, res, next) {
  res.render('instructors', { title: 'Instructors' });
});

module.exports = router;