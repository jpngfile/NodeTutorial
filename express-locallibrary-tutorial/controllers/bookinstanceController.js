var BookInstance = require('../models/bookinstance');

// Dislplay list of all BookInstances
exports.bookinstance_list = function(req, res) {
    res.send('Not Implemented: BookInstance list');
};

// Display detail page for specific BookInstance
exports.bookinstance_detail = function(req, res) {
    res.send('Not Implemented: BookInstance detatil: ' + req.params.id);
};

// Display BookInstance create form on GET
exports.bookinstance_create_get = function (req, res) {
    res.send('Not Implemented: BookInstance create GET');
};

// Handle BookInstance create on POST
exports.bookinstance_create_post = function(req, res) {
    res.send('Not Implemented: BookInstance create POST');
};

// Display BookInstance delete form on GET
exports.bookinstance_delete_get = function(req, res) {
    res.send('Not Implemented: BookInstance delete get');
};

// Display BookInstance delete on POST
exports.bookinstance_delete_post = function(req, res) {
    res.send('Not Implemented: BookInstance delete post');
};

// Display BookInstance update form on GET
exports.bookinstance_update_get = function (req, res) {
    res.send('Not Implemented: BookInstance update GET');
};

// Handle BookInstance update on POST
exports.bookinstance_update_post = function(req, res) {
    res.send('Not Implemented: BookInstance update POST');
};
