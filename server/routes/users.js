// Filename: routes/users.js
//   Wing Yin Andrew Sit (# 301188571)
//   Creation date: 2021/09/27

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
