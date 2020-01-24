"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var studentRouter = require('./routes/studentRouter');
var courseRouter = require('./routes/courseRouter');
var db = require('./db/db');
var app = express();
app.use(bodyParser.json());
app.use('/student', studentRouter);
app.use('/course', courseRouter);
app.listen(3000, function () { return console.log("listening on 3000"); });
