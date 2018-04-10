var Course = require('../models/courses');

exports.index = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all classes
exports.classList = function(req, res, next) {
    res.send('NOT IMPLEMENTED: class list');
};

// Display detail page for a specific class
exports.classDetail = function(req, res, next) {
    res.send('NOT IMPLEMENTED: class detail: ' + req.params.id);
};

// Display class create form on GET
exports.classCreateGet = function(req, res, next) {
    res.send('NOT IMPLEMENTED: class create GET');
};

// Handle class create on POST
exports.classCreatePost = function(req, res, next) {
    res.send('NOT IMPLEMENTED: class create POST');
};

// Display class delete form on GET
exports.classDeleteGet = function(req, res, next) {
    res.send('NOT IMPLEMENTED: class delete GET');
};

// Handle class delete on POST
exports.classDeletePost = function(req, res, next) {
    res.send('NOT IMPLEMENTED: class delete POST');
};

// Display class update form on GET
exports.classUpdateGet = function(req, res, next) {
    res.send('NOT IMPLEMENTED: class update GET');
};

// Handle class update on POST
exports.classUpdatePost = function(req, res, next) {
    res.send('NOT IMPLEMENTED: class update POST');
};