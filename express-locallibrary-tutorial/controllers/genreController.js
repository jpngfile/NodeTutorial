var Genre = require('../models/genre');
var Book = require('../models/book');
var async = require('async');
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// Dislplay list of all Genres
exports.genre_list = function(req, res) {
    
    Genre.find()
        .sort([['name', 'ascending']])
        .exec(function (err, list_genres) {
            res.render('genre_list', { title: 'Genre List', genre_list: list_genres });
        });
};

// Display detail page for specific Genre
exports.genre_detail = function(req, res) {
    
    async.parallel({
        genre: function(callback) {
            Genre.findById(req.params.id)
                .exec(callback);
        },

        genre_books: function(callback) {
            Book.find({ 'genre': req.params.id })
                .exec(callback);
        },

    }, function (err, results) {
        if (err) { return next(err); }
        if (results.genre == null) { // No results.
            var err = new Error('Genre not found');
            error.status = 404;
            return next(err);
        }
        res.render('genre_detail', {title: 'Genre Detail', genre: results.genre, genre_books: results.genre_books });
    });
};

// Display Genre create form on GET
exports.genre_create_get = function (req, res) {
    res.render('genre_form', { title: 'Create Genre' });
};

// Handle Genre create on POST
exports.genre_create_post = [

    // Validate that name field is not empty
    body('name', 'Genre name required').isLength({ min: 1 }).trim(),

    // Sanitize the name field
    sanitizeBody('name').trim().escape(),

    // Process request after validation and sanitization
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a genre object with escaped and trimmed data
        var genre = new Genre({ name: req.body.name });

        if (!errors.isEmpty()) {
            // Render form with error messages
            res.render('genre_form', { title: 'Create Genre', genre: genre, errors: errors.array()});
            return
        } else {
            Genre.findOne({ 'name': req.body.name })
                .exec( function(err, found_genre) {
                    if (err) { return next(err); }

                    if (found_genre) {
                        // Genre exists, redirect to detail page
                        res.redirect(found_genre.url)
                    } else {
                        genre.save(function(err) {
                            if (err) { return next(err); }
                            res.redirect(genre.url);
                        });
                    }
                })
        }
    }
];
                                
// Display Genre delete form on GET
exports.genre_delete_get = function(req, res) {
    res.send('Not Implemented: Genre delete get');
};
// Display Genre delete on POST
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
