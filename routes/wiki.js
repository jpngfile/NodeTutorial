// wiki.js - Wiki route module

var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function (req, res) {
    res.send('Wiki home page');
})

// About page route
router.get('/about', function (req, res) {
    res.send('About this wiki');
})

// Fish pages
router.get('/.*fish', function (req, res) {
    res.send('Fish are nice and delicious');
})

module.exports = router;
