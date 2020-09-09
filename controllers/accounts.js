var express = require('express');
var User = require('../models/user');

exports.signupForm = function(req, res) {
    res.render('accounts/new',{ title: 'Free Intro Class', user: {}, errors: [] });
};

exports.create = function(req, res) {
    var username = req.body.username;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var phone = req.body.phone;
    var heardaboutus = req.body.heardaboutus;

    var newUser = new User({
      username: username,
      firstname: firstname,
      lastname: lastname,
      phonenumber: phone,
      heardaboutus: heardaboutus,
    });

    newUser.save(function(err) {
      if (err) {
        res.render('accounts/new', { user: newUser, errors: err.errors });
        console.log(err);
    } else {
        res.redirect('/schedule');
        console.log('User saved successfully!');
    }

    });
};