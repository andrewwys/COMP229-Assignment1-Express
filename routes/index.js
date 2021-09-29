/* Filename: routes/index.js
  Wing Yin Andrew Sit (# 301188571)
  Creation date: 2021/09/27
  last revision: 2021/09/29
  
  Routing for 5 pages. */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});

module.exports = router;
