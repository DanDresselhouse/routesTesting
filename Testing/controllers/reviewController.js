var Review = require('../models/review');

exports.index = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all reviews
exports.reviewList = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Review list');
};

// Display detail page for a specific review
exports.reviewDetail = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Review detail: ' + req.params.id);
};

// Display review create form on GET
exports.reviewCreateGet = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Review create GET');
};

// Handle review create on POST
exports.revewCreatePost = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Review create POST');
};

// Display review delete form on GET
exports.reviewDeleteGet = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Review delete GET');
};

// Handle review delete on POST
exports.reviewDeletePost = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Review delete POST');
};

// Display review update form on GET
exports.reviewUpdateGet = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Review update GET');
};

// Handle review update on POST
exports.reviewUpdatePost = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Review update POST');
};