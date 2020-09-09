var express = require('express');
var router = express.Router();

router.get('/schedule', function(req, res, next) {
  res.render('schedule', { title: 'Schedule' });
});

module.exports = router;