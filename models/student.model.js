const mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required'
    },
    email: {
        type: String,
        required: 'This field is required'
    },
    mobile: {
        type: Number,
        required: 'This field is required'
    },
    city: {
        type: String,
        required: 'This field is required'
    }
});

const Student = mongoose.model('Student', studentSchema);

console.log('Student model has been created');

module.exports = Student;

mongoose.model('Student', studentSchema);