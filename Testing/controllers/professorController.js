var Professor = require('../models/professor');

exports.index = function(req, res, next) {
	res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all professors
exports.professorList = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Professor list');
};

// Display detail page for a specific professor
exports.professorDetail = function(req, res, next) {
	res.send('NOT IMPLEMENTED: Professor detail: ' + req.params.id);
};

// Display professor update form on GET
exports.professorUpdateGet = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Professor update GET');
};

// Handle professor update on POST
exports.professorUpdatePost = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Professor update POST');
};