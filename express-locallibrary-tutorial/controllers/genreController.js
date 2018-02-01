var Genre = require('../models/genre');

// Dislplay list of all Genres
exports.genre_list = function(req, res) {
    res.send('Not Implemented: Genre list');
};

// Display detail page for specific Genre
exports.genre_detail = function(req, res) {
    res.send('Not Implemented: Genre detatil: ' + req.params.id);
};

// Display Genre create form on GET
exports.genre_create_get = function (req, res) {
    res.send('Not Implemented: Genre create GET');
};

// Handle Genre create on POST
exports.genre_create_post = function(req, res) {
    res.send('Not Implemented: Genre create POST');
};

// Display Genre delete form on GET
exports.genre_delete_post = function(req, res) {
    res.send('Not Implemented: Genre delete post');
};

// Display Genre update form on GET
exports.genre_update_get = function (req, res) {
    res.send('Not Implemented: Genre update GET');
};

// Handle Genre update on POST
exports.genre_update_post = function(req, res) {
    res.send('Not Implemented: Genre update POST');
};
