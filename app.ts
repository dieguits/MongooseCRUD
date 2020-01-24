const express = require('express');
const bodyParser = require('body-parser');
const studentRouter = require('./routes/studentRouter');
const courseRouter = require('./routes/courseRouter');
var db = require('./db/db');
var app = express();

app.use(bodyParser.json());
app.use('/student', studentRouter);
app.use('/course', courseRouter);

app.listen(3000, () => console.log("listening on 3000"));
