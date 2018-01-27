var express = require("express");
var logger = require('morgan');
var square = require('./square');
var wiki = require('./wiki.js');
var app = express();

// Node: middleware are called in the order that they are declared
app.use(logger('dev'));
console.log('The area of a square with a width of 4 is ' + square.area(4));

var a_middleware_function = function(req, res, next) {
    console.log("called custom func");
    next();
}
app.use(a_middleware_function);
app.use('/someroute', a_middleware_function);
app.get('/', a_middleware_function);

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.all('/secret', function(req, res, next) {
    console.log('Accessing the secret section ...');
    next();
});

app.use('/wiki', wiki);
app.use('/media', express.static('public'));

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
