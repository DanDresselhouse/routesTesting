var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ReviewsSchema = Schema({
    // reviewer: {
    //     type: Schema.ObjectId,
    //     ref: 'Student',
    //     required: true,
    // },
    // student: {
    //     type: Schema.ObjectId,
    //     ref: 'Student',
    //     required: true,
    // },
    performanceRating: {
        type: String,
        required: true,
    },
    performanceComment: {
        type: String,
        required: true,
        min: 0,
        max: 200
    },
    collaborationRating: {
        type: String,
        required: true,
    },
    collaborationComment: {
        type: String,
        required: true,
        min: 0,
        max: 200
    },
    teamworkRating: {
        type: String,
        required: true,
    },
    teamworkComment: {
        type: String,
        required: true,
        min: 0,
        max: 200
    },
    contributionRating: {
        type: String,
        required: true,
    },
    contributionComment: {
        type: String,
        required: true,
        min: 0,
        max: 200
    },
});

// Virtual for author's full name
ReviewsSchema
    .virtual('id')
    .get(function () {
        return this._id;
    });


//Export model
module.exports = mongoose.model('Reviews', ReviewsSchema);