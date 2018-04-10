var express = require('express');
var router = express.Router();
// Require controller modules
var courseController = require('../controllers/courseController');

var mongoose = require('mongoose');
var courses = require('../models/courses');
var project = require('../models/project');
var reviews = require('../models/reviews');
/// course ROUTES ///

/* GET catalog home page. */
// router.get('/', courseController.index);

console.log("Gone through course router");

// router.route('/')
// .get(function(req, res, next) {
// 	//res.render('index', {title : 'Express'});
// 	console.log("get courses");
// 	 res.writeHead(200, {'Content-Type':'text-plain'}); //send reply back to the client 
// 	res.end('retrieve all courses');
// });

// /* GET request for list of all course items. */
// router.get('/courses', courseController.courseList);

// /* POST request for creating course. */
// router.post('/course', courseController.courseCreatePost);

// /* GET request for one course. */
// router.get('/course/:id', courseController.courseDeleteGet);

// // POST request to 
// router.post('/course/:id', courseController.courseDeletePost);

// /* GET request to update course. */
// router.put('/course/:id', courseController.courseUpdateGet);

// // POST request to update course
// router.post('/course/:id/update', courseController.courseUpdatePost);

// /* GET request for one course. */
// router.get('/course/:id', courseController.courseDetail);



// Application Route Document Route

// GET all courses
// router.get('/courses', courseController.courseList);

router.route('/')
.get(function(req, res, next) {
	courses.find({}, function(err, course) {
		if (err) throw err;
		res.json(course);
	});
})
.post(function(req, res, next) {
	courses.create(req.body, function(err, course) {
		if (err) throw err;
		res.end('Course created with id: ' + course._id);
	});
	// WORKS
});

// GET single course
// router.get('/courses/:courseID', courseController.courseDetail);

router.route('/:courseId')
.get(function(req, res, next) {
	courses.findById(req.params.courseId, function(err, course) {
		if (err) throw err;
		res.json(course);
	});
});

// GET all projects in a course
// router.get('/courses/:courseID/project', courseController.courseProjectList);

router.route('/:courseId/project')
.get(function(req, res, next) {
	courses.findById(req.params.courseId, function(err, course) {
		if (err) throw err;
		res.json(course.project);
	});
})
.post(function(req, res, next) {
	courses.findById(req.params.courseId, function(err, course) {
		course.projects.push(req.body);
		course.save(function(err, course) {
			if (err) throw err;
			console.log('Project created');
			res.json(course);
		});
	});
});

// GET single project in a course
// router.get('/courses/:courseID/project/:projectID', courseController.courseProjectDetail)

router.route('/:courseId/project/:projectId')
.get(function(req, res, next) {
	courses.findById(req.params.courseId, function(err, course) {
		if (err) throw err;
		res.json(course.project._id);
	});
});

// GET all reviews in a single project
// router.get('/courses/:courseID/project/:projectID/review', courseController.courseProjectReviewList);

router.route('/:courseId/project/:projectId/review')
.get(function(req, res, next) {
	courses.findById(req.params.courseId, function(err, course) {
		if (err) throw err;
		res.json(course.project.id(req.params.review));
	});
})
.post(function(req, res, next) {
	courses.findById(req.params.courseId, function(err, course) {
		if (err) throw err;
		project.findById(req.params.projectId, function(err, project) {
			if (err) throw err;
			project.reviews.push(req.body);
			project.save(function(err, project) {
				if (err) throw err;
				console.log('Review created');
				res.json(project);
			});
		});
	});
});

// GET single review in a single project
// router.get('/courses/:courseID/project/:projectID/review/:reviewID', courseController.courseProjectReviewDetail);

router.route('/:courseId/project/:projectId/review/:reviewId')
.get(function(req, res, next) {
	courses.findById(req.params.courseId, function(err, course) {
		if (err) throw err;
		res.json(course.project.id(req.params.reviewId));
	});
});

module.exports = router;