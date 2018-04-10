var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProfessorSchema = Schema({
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
    }
});

// Virtual for author's full name
ProfessorSchema
    .virtual('name')
    .get(function () {
        return this.lastName + ', ' + this.firstName;
    });


//Export model
module.exports = mongoose.model('Professor', ProfessorSchema);