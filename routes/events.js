var express = require('express');
var router = express.Router();

router.get('/events', function(req, res, next) {
  res.render('events', { title: 'Events & News' });
});

module.exports = router;