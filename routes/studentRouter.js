"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
var Student = require('../models/student');
router.get('/', function (req, res) {
    Student.find({}, function (err, students) {
        if (err) {
            res.end("some error occurred");
        }
        res.json(students);
    });
});
router.get('/test', function (req, res) {
    Student.find({}, function (err, students) {
        if (err) {
            res.end("some error occurred");
        }
        res.json(students);
    });
});
router.post('/', function (req, res) {
    var student = new Student(req.body);
    student.save(function (err, students) { return res.json(student); });
});
module.exports = router;
