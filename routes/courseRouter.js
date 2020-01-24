"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Course = require('../models/course');
var express = require('express');
var router = express.Router();
router.get('/', function (req, res) {
    Course.find({}, function (err, courses) {
        if (err) {
            res.end("some error occurred");
        }
        res.json(courses);
    });
});
router.post('/', function (req, res) {
    var course = new Course(req.body);
    course.save(function (err, course) { return res.json(course); });
});
module.exports = router;
