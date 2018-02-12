var express = require("express");
var logger = require('morgan');
var MongoClient = require('mongodb').MongoClient;
var square = require('./square');
var wiki = require('./wiki.js');
var app = express();

// Node: middleware are called in the order that they are declared
app.use(logger('dev'));
console.log('The area of a square with a width of 4 is ' + square.area(4));

MongoClient.connect('mongodb://jason:123@ds117128.mlab.com:17128/node_tutorial', function(err, client) {
    if (err) throw err;
    
    var db = client.db('node_tutorial')
    db.collection('mammals').find().toArray(function(err, result) {
        if (err) throw err;

        console.log(result);
        client.close();
    });
});
// Custom middleware function
var a_middleware_function = function(req, res, next) {
    console.log("called custom func");
    next();
}
app.use(a_middleware_function);
app.use('/someroute', a_middleware_function);
app.get('/', a_middleware_function);

app.set('view engine', 'pug')
// Default hello world welcome page
app.get('/', function (req, res) {
    res.render('index.pug', {title: 'Hey', message: 'Hello there!' })
});

app.get('/error', function (req, res) {
    throw "forced error"
});

app.all('/secret', function(req, res, next) {
    console.log('Accessing the secret section ...');
    next();
});

app.use('/wiki', wiki);
app.use('/media', express.static('public'));

//Handle errors. Must be after all route calls
//Node: To access stack trace set environment variable NODE_ENV to 'production'
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
