var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StudentSchema = Schema({
    firstName: {
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    lastName: {
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    password: {
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    picture: {
        type: String,
        required: false
    },
    groupId: {
        type: String,
        required: true
    }
});

// Virtual for author's full name
StudentSchema
    .virtual('name')
    .get(function () {
        return this.lastName + ', ' + this.firstName;
    });


//Export model
module.exports = mongoose.model('Student', StudentSchema);