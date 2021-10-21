// Filename: contacts.js
// Wing Yin Andrew Sit (# 301188571)
// Creation date: 2021/10/21

let mongoose = require('mongoose');

// create a model class
let contactsModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('contacts', contactsModel);