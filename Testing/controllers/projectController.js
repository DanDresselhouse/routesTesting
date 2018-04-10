var Project = require('../models/project');

exports.index = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all projects
exports.projectList = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Project list');
};

// Display detail page for a specific project
exports.projectDetail = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Project detail: ' + req.params.id);
};

// Display project create form on GET
exports.projectCreateGet = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Project create GET');
};

// Handle project create on POST
exports.projectreatePost = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Project create POST');
};

// Display project delete form on GET
exports.projectDeleteGet = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Project delete GET');
};

// Handle project delete on POST
exports.projectDeletePost = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Project delete POST');
};

// Display project update form on GET
exports.projectUpdateGet = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Project update GET');
};

// Handle project update on POST
exports.projectUpdatePost = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Project update POST');
};