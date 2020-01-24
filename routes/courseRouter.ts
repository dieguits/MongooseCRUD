import { Response, Request } from "express";
const Course = require('../models/course');
const express = require('express');
const router = express.Router();

router.get('/', function(req: Request, res : Response){
    Course.find({}, (err : Error, courses : any) => {
        if(err) {
            res.end("some error occurred");
        }

        res.json(courses);
    });
});

router.post('/', function(req: Request, res : Response){
    var course = new Course(req.body);
    course.save((err : Error, course : any)=> res.json(course));
});

module.exports = router;