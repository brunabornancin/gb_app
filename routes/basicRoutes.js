var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gracie Barra Calgary' });
});

router.get('/about-us/gb-yyc', function(req, res, next) {
  res.render('about-us/gb-yyc', { title: 'Gracie Barra Calgary' });
});

router.get('/about-us/instructors', function(req, res, next) {
  res.render('about-us/instructors', { title: 'Instructors' });
});

router.get('/programs/adults', function(req, res, next) {
  res.render('programs/adults', { title: 'Adults' });
});

router.get('/programs/kids', function(req, res, next) {
  res.render('programs/kids', { title: 'Kids & Teens' });
});

router.get('/programs/privatelessons', function(req, res, next) {
  res.render('programs/privatelessons', { title: 'Private Lessons' });
});

router.get('/gallery/gallery', function(req, res, next) {
  res.render('gallery/gallery', { title: 'Gallery' });
});

router.get('/contact/contact', function(req, res, next) {
  res.render('contact/contact', { title: 'Contact Us' });
});

router.get('/prospects/schedule', function(req, res, next) {
  res.render('prospects/schedule', { title: 'Schedule' });
});

module.exports = router;