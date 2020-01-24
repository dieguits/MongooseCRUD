"use strict";
var courseSchema = require('./course').courseSchema;
var mongoose = require('mongoose');
var studentSchema = new mongoose.Schema({
    id: Number,
    fname: String,
    lname: String,
    course: String,
    phone: Number,
    courses: [courseSchema]
});
module.exports = mongoose.model('Student', studentSchema);
