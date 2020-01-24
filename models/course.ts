var mongoose = require('mongoose');

var courseSchema = new mongoose.Schema({
    id: Number,
    name: String,
    credits: Number
});

var Course = mongoose.model('Course', courseSchema);

module.exports = { courseSchema, Course};