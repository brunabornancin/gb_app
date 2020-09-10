var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gracie Barra Calgary' });
});

router.get('/gb_yyc', function(req, res, next) {
  res.render('gb_yyc', { title: 'GB Calgary' });
});

router.get('/instructors', function(req, res, next) {
  res.render('instructors', { title: 'Instructors' });
});

router.get('/adults', function(req, res, next) {
  res.render('adults', { title: 'Adults' });
});

router.get('/kids', function(req, res, next) {
  res.render('kids', { title: 'Kids & Teens' });
});

router.get('/privatelessons', function(req, res, next) {
  res.render('privatelessons', { title: 'Private Lessons' });
});

router.get('/events', function(req, res, next) {
  res.render('events', { title: 'Events & News' });
});

router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'Gallery' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});

router.get('/schedule', function(req, res, next) {
  res.render('schedule', { title: 'Schedule' });
});

module.exports = router;