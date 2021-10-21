// Filename: contactList.js
// Wing Yin Andrew Sit (# 301188571)
// Creation date: 2021/10/21

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to contact list
let Contacts = require('../models/contacts');

// GET Route for Contact List page - READ operation
router.get('/', (req, res, next) => {
    Contacts.find((err, contactList) => {
        if(err) {
            return console.error(err);
        } else {
            res.render('contactList', {title: 'Contact List', contactList: contactList})
        }
    })
});

module.exports = router;