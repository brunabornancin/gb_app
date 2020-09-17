var express = require('express');
var prospectController = require('../controllers/prospects');
var router = express.Router();

router 
  .route('/register')
  .get(prospectController.signupForm) 
  .post(prospectController.create) 

module.exports = router;