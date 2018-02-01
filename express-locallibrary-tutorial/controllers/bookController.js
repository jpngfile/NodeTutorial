var Book = require('../models/book');

exports.index = function(req, res) {
    res.send('Not Implemented: Site Home Page');
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
exports.book_delete_post = function(req, res) {
    res.send('Not Implemented: Book delete post');
};

// Display Book update form on GET
exports.book_update_get = function (req, res) {
    res.send('Not Implemented: Book update GET');
};

// Handle Book update on POST
exports.book_update_post = function(req, res) {
    res.send('Not Implemented: Book update POST');
};
