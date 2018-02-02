var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');

var async = require('async');

exports.index = function(req, res) {
    
    async.parallel({
        book_count: function(callback) {
            Book.count(callback);
        },
        book_instance_count: function(callback) {
            BookInstance.count(callback);
        },
        book_instance_available_count: function(callback) {
            BookInstance.count({status:'Available'}, callback);
        },
        author_count: function(callback) {
            Author.count(callback);
        },
        genre_count: function(callback) {
            Genre.count(callback);
        },
    }, function(err, results) {
        res.render('index', { title: 'Local Library Home', error: err, data: results });
    });
};

// Dislplay list of all Books
exports.book_list = function(req, res) {
    res.send('Not Implemented: Book list');
};

// Display detail page for specific Book
exports.book_detail = function(req, res) {
    res.send('Not Implemented: Book detatil: ' + req.params.id);
};

// Display Book create form on GET
exports.book_create_get = function (req, res) {
    res.send('Not Implemented: Book create GET');
};

// Handle Book create on POST
exports.book_create_post = function(req, res) {
    res.send('Not Implemented: Book create POST');
};

// Display Book delete form on GET
exports.book_delete_get = function(req, res) {
    res.send('Not Implemented: Book delete GET');
};

// Display Book delete on POST
exports.book_delete_post = function(req, res) {
    res.send('Not Implemented: Book delete POST');
};

// Display Book update form on GET
exports.book_update_get = function (req, res) {
    res.send('Not Implemented: Book update GET');
};

// Handle Book update on POST
exports.book_update_post = function(req, res) {
    res.send('Not Implemented: Book update POST');
};
