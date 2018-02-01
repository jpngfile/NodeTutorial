var Author = require('../models/author');

// Dislplay list of all Authors
exports.author_list = function(req, res) {
    res.send('Not Implemented: Author list');
};

// Display detail page for specific Author
exports.author_detail = function(req, res) {
    res.send('Not Implemented: Author detatil: ' + req.params.id);
};

// Display Author create form on GET
exports.author_create_get = function (req, res) {
    res.send('Not Implemented: Author create GET');
};

// Handle Author create on POST
exports.author_create_post = function(req, res) {
    res.send('Not Implemented: Author create POST');
};

// Display Author delete form on GET
exports.author_delete_get = function(req, res) {
    res.send('Not Implemented: Author delete post');
};

// Display Author delete on POST
exports.author_delete_post = function(req, res) {
    res.send('Not Implemented: Author delete post');
};

// Display Author update form on GET
exports.author_update_get = function (req, res) {
    res.send('Not Implemented: Author update GET');
};

// Handle Author update on POST
exports.author_update_post = function(req, res) {
    res.send('Not Implemented: Author update POST');
};
