var mongoose = require('mongoose');
var project = require('./project');
var projectSchema = mongoose.model('Project').schema;

var Schema = mongoose.Schema;

var CourseSchema = Schema({
    courseName: {
        type: String,
        required: true,
        min: 3,
        max: 30
    },
    courseCode: {
        type: String,
        required: true,
        min: 6,
        max: 7
    },
    projects: [
        projectSchema
        ],
    students: [{
        type: Schema.ObjectId,
        ref: 'Student',
        required: true
    }],
    professor: {
        type: Schema.ObjectId,
        ref: 'Professor'
        //required: true
    }
});

// Virtual for author's full name
CourseSchema
    .virtual('name')
    .get(function () {
        return this.courseCode;
    });


//Export model
module.exports = mongoose.model('Course', CourseSchema);