var express = require("express");
var logger = require('morgan');
var square = require('./square');
var wiki = require('./wiki.js');
var app = express();

app.use(logger('dev'));
console.log('The area of a square with a width of 4 is ' + square.area(4));
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.all('/secret', function(req, res, next) {
    console.log('Accessing the secret section ...');
    next();
});

app.use('/wiki', wiki);

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
