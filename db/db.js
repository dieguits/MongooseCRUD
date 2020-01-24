"use strict";
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'conection error:'));
db.once('open', function () {
    console.log('were connected!!!');
});
module.exports = db;
