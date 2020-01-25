import { Request, Response } from "express";

const express = require('express');
const router = express.Router();
const Student = require('../models/student');

router.get('/', function(req: Request, res:Response){
    Student.find({}, (err: Error, students: any) => {
        if(err) {
            res.end("some error occurred");
        }

        res.json(students);
    });
});

router.get('/test', function(req: Request, res:Response){
    Student.find({}, (err: Error, students: any) => {
        if(err) {
            res.end("some error occurred");
        }

        res.json(students);
    });
});

router.post('/', function(req: Request, res:Response){
    var student = new Student(req.body);
    student.save((err: Error, students: any)=> res.json(student));
});

module.exports = router;