var Group = require('../models/group');

exports.index = function(req, res, next) {
	res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all groups
exports.groupList = function(req, res, next) {
	res.send('NOT IMPLEMENTED: Group list');
};

// Display detail page for one specific group
exports.groupDetail = function(req, res, next) {
	res.send('NOT IMPLEMENTED: Group detail: ' + req.params.id);
};

// Display group create form on GET
exports.groupCreateGet = function(req, res, next) {
	res.send('NOT IMPLEMENTED: Group create GET');
};

// Handle group create on POST
exports.groupCreatePost = function(req, res, next) {
	res.send('NOT IMPLEMENTED: Group create POST');
};

// Display group delete form on GET
exports.groupDeleteGet = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Group delete GET');
};

// Handle group delete on POST
exports.groupDeletePost = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Group delete POST');
};

// Display group update form on GET
exports.groupUpdateGet = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Group update GET');
};

// Handle group update on POST
exports.groupUpdatePost = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Group update POST');
};