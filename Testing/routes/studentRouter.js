var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// Require controller modules
var studentController = require('../controllers/studentController');

var mongoose = require('mongoose');
var students = require('../models/student');
/// student ROUTES ///

/* GET catalog home page. */
// router.get('/', studentController.index);

// /* GET request for list of all student items. */
// router.get('/students', studentController.studentList);

// /* POST request for creating student. */
// router.post('/student', studentController.studentCreatePost);

// /* GET request for one student. */
// router.get('/student/:id', studentController.studentDeleteGet);

// // POST request to 
// router.post('/student/:id', studentController.studentDeletePost);

// /* GET request to update student. */
// router.put('/student/:id', studentController.studentUpdateGet);

// // POST request to update student
// router.post('/student/:id/update', studentController.studentUpdatePost);

// /* GET request for one student. */
// router.get('/student/:id', studentController.studentDetail);



// Application Router Doc 

// POST create a student
// router.post('/student', studentController.studentPost);

console.log("Gone through student router");

router.route('/')
.get(function(req, res, next) {
	students.find({}, function(err, student) {
		if (err) throw err;
		res.json(student);
	});
})
.post(function(req, res, next) {
	students.create(req.body, function(err, student) {
		if (err) throw err;

		console.log('Student created');

		var id = student._id;
		res.writeHead(200, {'Content-Type' : 'text-plain'});
		res.end('Added the student, ' + student.firstName + ', with id: ' + id);
		// WORKS
	});
});

// POST student creates review
// router.post('/student/:studentID/review', studentController.studentCreateReviewPost);

router.route('/:studentId/review')
.get(function (req, res, next) {
	students.findById(req.params.studentId, function (err, student) {
		if (err) throw err;
		res.end("Get review form for a single student")
		res.json(student.reviews);
		// WORKS
	});
})
.post(function(req, res, next) {
	students.findById(req.params.studentId, function(err, student) {
		if (err) throw err;
		student.reviews.push(req.body);
		student.save(function (err, student) {
			if (err) throw err;
			console.log('Updated reviews');
			res.json(student);
		});
	});
});

// GET single course information for a single student
// router.get('/student/:studentID/course/:courseID', studentController.studentCourseDetail);

router.route('/:studentId/course/:courseId')
.get(function (req, res, next) {
	students.findById(req.params.studentId, function(err, student) {
		if (err) throw err;
		res.json(student.courses.id(req.params.courseId));
	});
});

// GET single project information for a single student
// router.get('/student/:studentID/course/:courseID/project/:projectID', studentController.studentCourseProjectDetail);

// I DO NOT KNOW IF THIS WILL WORK DUE TO THE LONG PATH
router.route('/:studentId/course/:courseId/project/:projectId')
.get(function (req, res, next) {
	students.findById(req.params.studentId, function (err, student) {
		if (err) throw err;
		res.json(student.project.id(req.params.projectId));
	});
});

// GET review form for a single student
// router.get('/student/:studentID/review', studentController.studentReviewPage);

// done above in the post section of this route

// GET all reviews of student (themselves)
// router.get('/student/:studentID/review/:studentID', studentController.studentReviewList);

router.route('/:studentId/review/:studentId')
.get(function (req, res, next) {
	students.findById(req.params.studentId, function (err, student) {
		if (err) throw err;
		res.json(student.reviews.id(req.params.studentId));
	});
});

// GET a single review of a student
// router.get('/student/:studentID/review/:reviewID', studentController.studentReviewDetail);

router.route('/:studentId/review/:reviewId')
.get(function (req, res, next) {
	students.findById(req.params.studentId, function (err, student) {
		if (err) throw err;
		res.json(student.reviews.id(req.params.reviewId));
	});
});

module.exports = router;