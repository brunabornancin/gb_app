var express = require('express');
var Prospect = require('../models/prospect');

exports.signupForm = function(req, res) {
    res.render('prospects/new',{ title: 'Free Intro Class', prospect: {}, errors: [] });
};

exports.create = function(req, res) {
    var username = req.body.username;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var phone = req.body.phone;
    var heardaboutus = req.body.heardaboutus;

    var newProspect = new Prospect({
      username: username,
      firstname: firstname,
      lastname: lastname,
      phonenumber: phone,
      heardaboutus: heardaboutus,
    });

    newProspect.save(function(err) {
      if (err) {
        res.render('prospects/new', { prospect: newProspect, errors: err.errors });
        console.log(err);
    } else {
        res.redirect('/prospects/schedule');
        console.log('User saved successfully!');
    }

    });
};