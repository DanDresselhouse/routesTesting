var Student = require('../models/student');

exports.index = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all students
exports.studentList = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Student list');
};

// Display detail page for a specific student
exports.studentDetail = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Student detail: ' + req.params.id);
};

// Display student create form on GET
exports.studentCreateGet = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Student create GET');
};

// Handle student create on POST
exports.studentCreatePost = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Student create POST');
};

// Display student delete form on GET
exports.studentDeleteGet = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Student delete GET');
};

// Handle student delete on POST
exports.studentDeletePost = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Student delete POST');
};

// Display student update form on GET
exports.studentUpdateGet = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Student update GET');
};

// Handle student update on POST
exports.studentUpdatePost = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Student update POST');
};