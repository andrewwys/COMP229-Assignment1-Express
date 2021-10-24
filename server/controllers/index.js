/* Filename: routes/index.js
  Wing Yin Andrew Sit (# 301188571)
  Creation date: 2021/10/23  */

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home'});
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', {title: 'About Me'});
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('index', {title: 'Projects'});
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('index', {title: 'Services'});
}

module.exports.displayContactMePage = (req, res, next) => {
    res.render('index', {title: 'Contact Me'});
}

// Login Page
module.exports.displayLoginPage = (req, res, next) => {
    // check if user is already logged in
    if(!req.user) {
        res.render('auth/login', {
            title: "Login", 
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        })
    } else {
        return res.redirect('/');
    }
}

module.exports.displayLoginPage = (req, res, next) => {
    // check if user is already logged in
    if(!req.user) {
        res.render('auth/login', {
            title: "Login", 
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        })
    } else {
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local',
    (err, user, info) => {
        // server error?
        if(err) {
            return next(err);
        }
        // is there a user login error?
        if(!user) {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            // server error?
            if(err) {
                return next(err);
            }
            return res.redirect('/contact-list');
        });
    })(req, res, next);
}