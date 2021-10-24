/* Filename: routes/index.js
  Wing Yin Andrew Sit (# 301188571)
  Creation date: 2021/09/27
  
  Routing for 5 pages. */

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

router.get('/', indexController.displayHomePage);

router.get('/home', indexController.displayHomePage);

router.get('/about', indexController.displayAboutPage);

router.get('/projects', indexController.displayProjectsPage);

router.get('/services', indexController.displayServicesPage);

router.get('/contact', indexController.displayContactMePage);

// Login page
router.get('/login', indexController.displayLoginPage);

router.post('/login', indexController.processLoginPage);

module.exports = router;
